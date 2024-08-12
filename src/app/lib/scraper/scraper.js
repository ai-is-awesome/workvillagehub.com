const puppeteer = require("puppeteer");

class Scraper {}

async function scrape2() {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto("https://linkedin.com/");
  await page.setViewport({ width: 1080, height: 1024 });
  //   const html = await page.content();
  const elem = await page.waitForSelector(".nav__button-secondary");
  const t = await (await elem.getProperty("textContent")).jsonValue();
  console.log(t);
  //   await elem.screenshot({ path: "screenshot.png" });
  await elem.dispose();
  setTimeout(async () => {
    await browser.close();
  }, 1000);
}

async function scrape() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto("https://twitter.com/nitesh_singh5");
  // Set screen size
  await page.setViewport({ width: 1080, height: 1024 });

  // Type into search box
  //   await page.type(".devsite-search-field", "automate beyond recorder");

  // Wait and click on first result
  //   const searchResultSelector = ".devsite-result-item-link";
  //   await page.waitForSelector(searchResultSelector);
  //   await page.click(searchResultSelector);

  // Locate the full title with a unique string
  const textSelector = await page.waitForSelector(
    "text/Customize and automate"
  );
  const fullTitle = await textSelector?.evaluate((el) => el.textContent);

  // Print the full title
  console.log('The title of this blog post is "%s".', fullTitle);

  await browser.close();
}

scrape2();
