const puppeteer = require("puppeteer");
const fs = require("fs");

const cuv_urls = {
  otherJobs: "https://cuvette.tech/app/dashboard/other-jobs",
  loginUrl: "https://cuvette.tech/app/student/login",
  email: "",
  password: "",
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
    console.log("Logging in");
    page.goto(cuv_urls.loginUrl);
    const emailInput = await page.locator("input[name='email']");
    const passwordInput = await page.locator("input[name='password']");
    emailInput.fill("third.email2801@gmail.com");
    passwordInput.fill("sulphuric");
  }
}

function saveJSONFile() {
  fetch("https://api.cuvette.tech/api/v1/externaljobs?search=")
    .then((res) => res.json())
    .then((jsonData) => {
      fs.writeFileSync(
        "out/cuvetteJobs.json",
        JSON.stringify(jsonData),
        function (err) {
          if (err) {
            console.log("Error Occured while saving file");
          }
        }
      );
    });
}

// new CuvetteScraper().scrape();

saveJSONFile();
