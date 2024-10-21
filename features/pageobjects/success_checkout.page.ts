import {$,expect} from "@wdio/globals"

class SuccessCheckoutPage{
    public get mainContainerComponent(){
        return $("div[class='checkout-success']")
    }

    public async assertUserIsInSuccessCheckoutPage(){
        const mainContainerComponent = await this.mainContainerComponent
        await expect(mainContainerComponent).toBeDisplayed()
    }
}

export default new SuccessCheckoutPage()