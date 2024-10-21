import { $,$$, expect, browser } from "@wdio/globals"
import {Key} from "webdriverio"

class Header{
    public get daftarAkunButtonComponent(){
        return $("div[id='store.menu']")
        .$("div[class='authorization register']")
        .$("a[class='new-register-link']")
    }
    public get loginButtonComponent(){
        return $("div[id='store.menu']")
        .$("div[class='authorization authorization-link']")
        .$("a")
    }
    public get searchInputComponent(){
        return $("input[id='search']")
    }
    public get accountNavComponent(){
        return $("div[class='authorization authorization-link loggedin']")
    }

    public async setValueSearchInputComponent(query:string){
        const searchInputComponent = await this.searchInputComponent
        await searchInputComponent.waitForDisplayed()

        await searchInputComponent.click()
        await searchInputComponent.setValue(query)
        await expect(searchInputComponent).toHaveValue(query)

        await browser.keys([Key.Enter])
    }

    public async clickLoginButton(){
        const loginButtonComponent = await this.loginButtonComponent
        await loginButtonComponent.waitForClickable()

        await loginButtonComponent.click()
    }

    public async clickDaftarAkunButton(){
        const daftarAkunButtonComponent = await this.daftarAkunButtonComponent
        await daftarAkunButtonComponent.waitForClickable()

        await daftarAkunButtonComponent.click()
    }
}

export default new Header()
