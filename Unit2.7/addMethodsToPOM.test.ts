import {
    Builder,
    By,
    Capabilities,
    until,
    WebDriver,
    WebElement,
  } from "selenium-webdriver";
  const chromedriver = require("chromedriver");

  const driver: WebDriver = new Builder().withCapabilities(Capabilities.chrome()).build()

  class employeePO {
      driver: WebDriver;
      url: string = 'https://devmountain-qa.github.io/employee-manager/1.2_Version/index.html'
      header: By = By.css('.titleText')
      addEmployee: By = By.css('[name="addEmployee"]')
      newEmployee: By = By.css('[name="employee11"]')
      nameField: By = By.css('[name="nameEntry"]')
      phoneField: By = By.css('[name="phoneEntry"]')
      titleField: By = By.css('[name="titleEntry"]')
      saveBtn: By = By.xpath('//button[@id="saveBtn"]')
      constructor(driver: WebDriver){
          this.driver = driver
      }
      async navigate() {
          await this.driver.get(this.url)
          await this.driver.wait(until.elementLocated(this.header))
      }
      async click(elementBy: By) {
          await this.driver.wait(until.elementLocated(elementBy))
          return (await this.driver.findElement(elementBy)).click()
      }
      async sendKeys(elementBy: By, keys) {
          await this.driver.wait(until.elementLocated(elementBy))
          return this.driver.findElement(elementBy).sendKeys(keys)
      }
      async getText(elementBy) {
          await this.driver.wait(until.elementLocated(elementBy))
          return this.driver.findElement(elementBy).getText()
      }
   
      async setInput(elementBy: By, keys: any): Promise<void> {
          let input = await this.driver.findElement(elementBy)
          await input.click()
          await input.clear()
          return input.sendKeys(keys)
      }
    }

    const emPage = new employeePO(driver)

    describe('Practicing PageObjects', () => {
        beforeEach(async () => {
            await emPage.navigate()
        })
        afterAll(async () => {
            await driver.quit()
        })

        test("adding Employees", async () => {
            await emPage.click(emPage.addEmployee)
            await emPage.click(emPage.newEmployee)
            await emPage.setInput(emPage.nameField, "Bob Smith")
            await emPage.setInput(emPage.phoneField, "5867350454")
            await emPage.setInput(emPage.titleField,"CEO or something")
            await emPage.click(emPage.saveBtn)
        })
    })