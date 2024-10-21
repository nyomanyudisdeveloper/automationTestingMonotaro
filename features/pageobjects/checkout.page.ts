import {$,$$,expect, browser} from "@wdio/globals"
import { StaticGlobalVariable } from "../utils/staticGlobalVariable"

class CheckoutPage{
    public get paymentContainerComponent(){
        return $("div[id='iosc-summary']")
    }
    public get firstListProductComponent(){
        return $$("li[class='product-item']")[0]
    }
    public get payNowButtonComponent(){
        return $("button[id='continue-to-payment-trigger']")
    }
    public get modalPaymentComponent(){
        return $("div[id='popup-payment']")
    }
    public get continuePaymentButtonInModalPaymentComponent(){
        return this.modalPaymentComponent
        .$("div[class='popup-payment-button-wrapper']")
        .$("div[class='action-primaryBlock']")
        .$("button[class='onestepcheckout-place-order popup-payment-placeorder btn btn-primary']")
    }

    public async clickPayNowButton(){
        const payNowButtonComponent = await this.payNowButtonComponent
        await payNowButtonComponent.waitForClickable()

        await payNowButtonComponent.click()

        const modalPaymentComponent = await this.modalPaymentComponent
        // Need to pause with browser pause because to prevent except failed and terminate automation testing
        await browser.pause(2000)
        const isDisplayed = await modalPaymentComponent.isDisplayed()
        if(isDisplayed){
            const continuePaymentButtonInModalPaymentComponent = await this.continuePaymentButtonInModalPaymentComponent
            await continuePaymentButtonInModalPaymentComponent.waitForClickable()
            await continuePaymentButtonInModalPaymentComponent.click()
        }
    }

    public async assertFirstListProduct(){
        const firstListProductName = await this.firstListProductComponent
        .$("div[class='product']")
        .$("div[class='product-item-details']")
        .$("div[class='product-item-inner']")
        .$("div[class='product-item-name-block']")
        .$("strong[class='product-item-name truncated']")
        .getText()

        await expect(firstListProductName).toContain(StaticGlobalVariable.product_name)
    }

    public async assertUserIsInCheckoutPage(){
        const paymentContainerComponent = await this.paymentContainerComponent
        await expect(paymentContainerComponent).toBeDisplayed()
    }
}

export default new CheckoutPage()