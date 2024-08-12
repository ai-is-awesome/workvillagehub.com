const puppeteer = require("puppeteer");

class TwitterScraper {
  constructor(cookieFilePath = "cookies.json") {
    this.cookieFilePath = cookieFilePath;
    this.browser = null;
    this.page = null;
  }

  async isLoggedIn() {}

  async login() {}
}

async function scrape() {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto("https://x.com/nitesh_singh5/");
  //   await page.setViewport({ width: 1080, height: 1024 });
}

scrape();
