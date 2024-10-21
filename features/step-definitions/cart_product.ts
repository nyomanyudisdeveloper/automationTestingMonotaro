import {When,Then} from "@wdio/cucumber-framework"
import ProductDetailPage from "../pageobjects/product_detail.page"
import ModalProductCartPage from "../pageobjects/modal_product_cart.page"

When("User click first buy button in Product Detail", async() => {
    await ProductDetailPage.clickFirstBuyButton()
})
Then("Assert modal product cart is shown", async() => {
    await ModalProductCartPage.assertModalProductCartIsShow()
})
When("User in modal product cart is click continue to checkout button", async () => {
    await ModalProductCartPage.clickContinueToCheckoutButton()
})
Then("Assert modal product cart is hidden", async() => {
    await ModalProductCartPage.assertModalProductCartIsHide()
})