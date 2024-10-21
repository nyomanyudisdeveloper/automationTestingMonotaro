import { $, expect } from '@wdio/globals'

class LoginPage {
    public get titleFormLoginComponent(){
        return $("div[class='block block-customer-login']")
        .$("div[class='form-head']")
        .$("div[class='title']")
    }

    public get emailInputComponent(){
        return $("input[id='email']")
    }

    public get passwordInputComponent(){
        return $("input[id='password']")
    }

    public get loginButtonComponent(){
        return $("button[id='send2']")
    }

    public async clickLoginButtonComponent(){
        const loginButtonComponent = await this.loginButtonComponent
        await loginButtonComponent.waitForClickable()

        await loginButtonComponent.click()
    }

    public async setValueInPasswordInputComponent(password:string){
        const passwordInputComponent = await this.passwordInputComponent
        await passwordInputComponent.waitForDisplayed()

        await passwordInputComponent.setValue(password)
        await expect(passwordInputComponent).toHaveValue(password)
    }

    public async setValueInEamilInputComponent(email:string){
        const emailInputComponent = await this.emailInputComponent
        await emailInputComponent.waitForDisplayed()

        await emailInputComponent.setValue(email)
        await expect(emailInputComponent).toHaveValue(email)
    }

    public async assertUserIsInLoginPage(){
        const titleFormLoginComponent = await this.titleFormLoginComponent
        await titleFormLoginComponent.waitForDisplayed()

        await expect(titleFormLoginComponent).toHaveText("Sudah Punya Akun?")
    }
}

export default new LoginPage();
