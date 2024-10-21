import {$,expect} from "@wdio/globals"

class AccountPage{
    public get titleLeftNavigationContainerComponent(){
        return $("div[id='block-collapsible-nav']")
        .$("span[class='account-customer-name notranslate']")
    }

    public async assertUserIsInAccountPage(){
        const titleLeftNavigationContainerComponent = await this.titleLeftNavigationContainerComponent
        await titleLeftNavigationContainerComponent.waitForDisplayed()

        await expect(titleLeftNavigationContainerComponent).toBeDisplayed()
    }
}

export default new AccountPage()