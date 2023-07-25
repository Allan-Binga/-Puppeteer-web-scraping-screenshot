const pupperteer = require('puppeteer')

async function start() {
    const browser = await pupperteer.launch()
    const page = await browser.newPage()
    await page.goto("https://learnwebcode.github.io/practice-requests/") //Site URL
    await page.screenshot({path: "screenshot.png"})
    await browser.close()
}

start()