import puppeteer from "puppeteer";

const browser = await puppeteer.launch({
  headless: false,
  defaultViewport: { width: 1920, height: 1080 },
  slowMo: 250,
});

const page = await browser.newPage();
await page.goto("https://example.com");
await page.screenshot({ path: "screenshot.png" });

await page.goto("https://devconfbd.com/");
await page.screenshot({ path: "devconfbd.png" });

// await setTimeout(1000);
const guestElement = await page.waitForSelector("img[alt='guest']");
await guestElement.scrollIntoView();
// await setTimeout(1000);
await page.click("img[alt='guest']");
// await setTimeout(1000);
await page.screenshot({ path: "guest.png" });

await browser.close();
