import {Then} from "@wdio/cucumber-framework"
import AccountPage from "../pageobjects/account.page"

Then("Assert User is in Account Page", async () => {
    await AccountPage.assertUserIsInAccountPage()
})