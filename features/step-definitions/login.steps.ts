import { When,Then, Given } from "@wdio/cucumber-framework";
import HeaderPage from "../pageobjects/header.page";
import LoginPage from "../pageobjects/login.page";
import {browser} from "@wdio/globals"

When("User click button login in Header Component", async () => {
    await HeaderPage.clickLoginButton()
})
Then("Assert User is in Login Page", async() => {
    await LoginPage.assertUserIsInLoginPage()
})
When(/^User set value input email with (.+) in Login Page$/, async(email:string) => {
    await LoginPage.setValueInEamilInputComponent(email)
})
When(/^User set value input password with (.+) in Login Page$/, async(password:string) => {
    await LoginPage.setValueInPasswordInputComponent(password)
})
When("User click login button in Login Page", async() => {
    await LoginPage.clickLoginButtonComponent()
})