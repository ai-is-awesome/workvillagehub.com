const puppeteer = require("puppeteer");

cuv_urls = {
  otherJobs: "https://cuvette.tech/app/dashboard/other-jobs",
  loginUrl: "https://cuvette.tech/app/student/login",
};

class CuvetteScraper {
  constructor() {}
  async scrape() {
    console.log("Running");
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto(cuv_urls.otherJobs);
    const isLoggedIn = await this.isLoggedIn(page);
    console.log(isLoggedIn);
    if (!isLoggedIn) {
      await this.login(page);
    }

    setTimeout(async () => {
      await browser.close();
    }, 100000);
  }

  async isLoggedIn(page) {
    const elem = await page.waitForSelector("a[href='/app/student/login']");
    const t = await (await elem.getProperty("textContent")).jsonValue();
    if (t.toLowerCase().trim().includes("sign up")) {
      return false;
    }
    return true;
  }

  async login(page) {
    page.goto(cuv_urls.loginUrl);
    const emailInput = await page.locator("input[name='email']");
  }
}

new CuvetteScraper().scrape();
