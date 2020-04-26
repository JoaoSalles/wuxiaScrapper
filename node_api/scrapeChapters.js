const puppeteer = require("puppeteer");

module.exports = async function () {
  let firstUrl = "https://m.wuxiaworld.co/Library-of-Heaven-s-Path/2635234.html";
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  // await page.setViewport({ width: 1920, height: 926 });
  await page.goto(firstUrl);
  let chapters = [];

  try {
    while (await page.waitForSelector('#pt_next', { timeout: 4000 })) {
      const chapterContent = await page.$('#chaptercontent'); // create elementHandle to run functions
      chapters.push(await chapterContent.evaluate(element => { return element.innerText }))
      await page.click('#pt_next');
    }
  } catch (err) {

  }
  await browser.close();
  return chapters;
}
