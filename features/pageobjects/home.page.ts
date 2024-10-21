import {$, expect} from "@wdio/globals"

class HomePage {
    public get homeContainerComponent(){
        return $("div[class='homepage-container']")
    }

    public async checkUserIsInHomePage(){
        const homeContainerComponent = await this.homeContainerComponent
        await homeContainerComponent.waitForDisplayed()

        await expect(homeContainerComponent).toBeExisting()
    }
}

export default new HomePage()