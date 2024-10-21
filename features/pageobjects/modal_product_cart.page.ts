import {$, expect} from "@wdio/globals"

class ModalProductCart {
    public get mainContainerComponent(){
        return $("div[id='popup-cart']")
    }

    public get continueToCheckoutButtonComponent(){
        return $("a[class='button checkout']")
    }

    public async clickContinueToCheckoutButton(){
        const continueToCheckoutButtonComponent = await this.continueToCheckoutButtonComponent
        await continueToCheckoutButtonComponent.waitForDisplayed()

        await continueToCheckoutButtonComponent.click()
    }

    public async assertModalProductCartIsShow(){
        const mainContainerComponent = await this.mainContainerComponent
        await expect(mainContainerComponent).toBeDisplayed()
    }

    public async assertModalProductCartIsHide(){
        const mainContainerComponent = await this.mainContainerComponent
        const isVisible = await mainContainerComponent.isDisplayed()
        await expect(isVisible).toBe(false)
    }
}

export default new ModalProductCart()