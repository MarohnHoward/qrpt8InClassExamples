import {Google} from './baseGooglePage'
const fs = require('fs')
const google = new Google()

test('do a seach', async () => {
    await google.navigate()
    await google.search('Chicago Bears')
    let text = await google.getResults()
    expect(text).toContain('Chicago Bears')
    await fs.writeFile(`${__dirname}/test.txt`, text, (e) => {
        if (e) console.error(e)
        else console.log('Save Successful')
    })
    await fs.writeFile(`${__dirname}/googleScreenshot.png`, 
    await google.driver.takeScreenshot(), "base64", 
    (e) => {
        if (e) console.error(e)
        else console.log("Save Sucessful")
    })
})
afterAll(async () => {
    await google.driver.quit()
})