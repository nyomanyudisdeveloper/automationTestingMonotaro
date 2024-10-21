import {$,$$,expect, browser} from "@wdio/globals"
import { StaticGlobalVariable } from "../utils/staticGlobalVariable"

class ListSearchProduct{
    public get titleSearchQueryComponent(){
        return $("div[class='search-columns-top flex-flow-row flex-flow-row--start']")
        .$("div[class='col-top-result search-main-title']")
        .$("div[class='page-title-wrapper']")
        .$("h1[class='page-title']")
        .$("span[class='base']")
    }

    public get firstListProduct(){
        return $$("li[class='item product product-item']")[0]
    }

    public async assertQuerySearchIsFoundInListSearchProduct(query:string){
        const titleSearchQueryComponent = await this.titleSearchQueryComponent
        await titleSearchQueryComponent.waitForDisplayed()

        const textTitle = await titleSearchQueryComponent.getText()
        await expect(textTitle).toContain(query)
    }

    public async clickFirstListProduct(){
        const firstListProductPhoto = await this.firstListProduct
        .$("div[class='product-item-info']")
        .$("a[class='product photo product-item-photo']")

        const firstProductName = await this.firstListProduct
        .$("div[class='product-item-info']")
        .$("div[class='product details product-item-details']")
        .$("div[class='product_name_descp']")
        .$("strong[class='product name product-item-name']")
        .$("a[class='product-item-link']")
        .getText()

        StaticGlobalVariable.product_name = firstProductName
        await firstListProductPhoto.click()

    }
}

export default new ListSearchProduct()