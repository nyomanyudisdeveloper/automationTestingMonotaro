import {$, $$, expect,browser} from "@wdio/globals"
import { StaticGlobalVariable } from "../utils/staticGlobalVariable"

class ProuductDetailPage {
    public get titleProductNameComponent(){
        return $("h1[class='page-title']")
        .$("span[class='base']")
    }

    public get firstBuyButtonComponent(){
        return $$("button[class='action primary addtocartbtn']")[0]
    }

    public async clickFirstBuyButton(){
        await browser.execute(() => {
            window.scrollTo(0, 700); 
        });

        const firstBuyButtonComponent = await this.firstBuyButtonComponent
        await firstBuyButtonComponent.waitForClickable()

        await firstBuyButtonComponent.click()
    }

    public async assertTitleProductName(){
        const titleProductNameComponent = await this.titleProductNameComponent
        await titleProductNameComponent.waitForDisplayed()
        
        await expect(titleProductNameComponent).toHaveText(StaticGlobalVariable.product_name)
    }
}

export default new ProuductDetailPage()