import {When, Then} from "@wdio/cucumber-framework"
import HeaderPage from "../pageobjects/header.page"
import ListSearchProduct from "../pageobjects/list_search_product.page"
import ProductDetailPage from "../pageobjects/product_detail.page"

When(/^User set value search input with (.+) in Header Component$/, async (query:string) => {
    await HeaderPage.setValueSearchInputComponent(query)
})

Then(/^Assert query search is same with (.+) in List Search Product Page$/,async (query:string) => {
    await ListSearchProduct.assertQuerySearchIsFoundInListSearchProduct(query)
})

When("User click first product in List Search Product Page", async() => {
    await ListSearchProduct.clickFirstListProduct()
})

Then("Assert title product name in Product Detail Page", async() => {
    await ProductDetailPage.assertTitleProductName()
})