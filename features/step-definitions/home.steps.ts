import {Given, When, Then} from "@wdio/cucumber-framework"
import HomePage from "../pageobjects/home.page"


Given("Assert User is In Home Page", async () => {
    await HomePage.checkUserIsInHomePage()
})