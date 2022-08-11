import {Builder, By, Capabilities, until, WebDriver} from 'selenium-webdriver'

const chromedriver = require("chromedriver")

const driver: WebDriver = new Builder().withCapabilities(Capabilities.chrome()).build()

import {employeeManPO} from './employeeMangerPage'

const employeePage = new employeeManPO(driver)

describe("practicing abstraction",  () => {
    beforeEach(async () => {
        await employeePage.navigate()
    })
    afterAll(async () => {
        await employeePage.driver.quit()
    })

    test('adding an employee name', async () => {
        await employeePage.click(employeePage.addEmployee)
        await employeePage.click(employeePage.newEmployee)
        await employeePage.setInput(employeePage.nameField, "Bob the Builder")
        await employeePage.click(employeePage.saveBtn)
    })
})