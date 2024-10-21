import {Then,When} from "@wdio/cucumber-framework"
import CheckoutPage from "../pageobjects/checkout.page"
import SuccessCheckoutPage from "../pageobjects/success_checkout.page"

Then("User is in Checkout Page", async() => {
    await CheckoutPage.assertUserIsInCheckoutPage()
})
Then("Assert User in Checkout Page first product name", async()=> {
    await CheckoutPage.assertFirstListProduct()
})
When("User in Checkout Page click pay now button", async() => {
    await CheckoutPage.clickPayNowButton()
})
Then("Assert User is in Success Checkout Page", async() => {
    await SuccessCheckoutPage.assertUserIsInSuccessCheckoutPage()
})
