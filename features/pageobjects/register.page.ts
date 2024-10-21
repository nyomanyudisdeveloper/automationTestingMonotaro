import {$, expect, browser} from "@wdio/globals"

class RegisterPage {
    public get titleFormComponent(){
        return $("form[id='form-validate']")
        .$("div[class='form__header flex-flow-row']")
        .$("div[class='header__title']")
        .$("h1")
    }
    public get inputEmailAddressComponent(){
        return $("input[id='email_address']")
    }
    public get inputPasswordComponent(){
        return $("input[id='password']")
    }
    public get inputFullNameComponent(){
        return $("input[id='fullname']")
    }
    public get inputPhoneNumerComponent(){
        return $("input[id='phone']")
    }
    public get individuRadioButtonComponent(){
        return $("label[id='tabIndividual']")
    }
    public get bisnisRadioButtonComponent(){
        return $("label[id='tabBusiness']")
    }
    public get customerHintIndividuComponent(){
        return $("div[id='customer-hint']")
    }
    public get registerButtonComponent(){
        return $("button[id='button-register']")
    }

    public async clickRegisterButton(){
        const registerButtonComponent = await this.registerButtonComponent
        await registerButtonComponent.waitForClickable()

        await registerButtonComponent.click()
    }

    public async assertCustomerHintIndividuIsShow(){
        const customerHintIndividuComponent = await this.customerHintIndividuComponent
        await customerHintIndividuComponent.waitForDisplayed()

        expect(customerHintIndividuComponent).toBeDisplayed()
        // need to pause because with no explicit reason when i try to click button register, it just loading and nothing happened
        await browser.pause(2000)
    }

    public async clickTypeAccountRadioButton(typeAccount:string){
        if(typeAccount == "Bisnis"){
            const bisnisRadioButtonComponent = await this.bisnisRadioButtonComponent
            await bisnisRadioButtonComponent.waitForClickable()

            await bisnisRadioButtonComponent.click()
        }
        else if (typeAccount == "Individu"){
            const individuRadioButtonComponent = await this.individuRadioButtonComponent
            await individuRadioButtonComponent.waitForClickable()

            await individuRadioButtonComponent.click()
        }
        // need to pause because with no explicit reason when i try to click button register, it just loading and nothing happened
        await browser.pause(2000)
    }

    public async setValueInputPhoneNumber(phoneNumber:string){
        const inputPhoneNumerComponent = await this.inputPhoneNumerComponent
        await inputPhoneNumerComponent.waitForDisplayed()

        await inputPhoneNumerComponent.click()
        await inputPhoneNumerComponent.setValue(phoneNumber)
        await expect(inputPhoneNumerComponent).toHaveValue(phoneNumber)
        // need to pause because with no explicit reason when i try to click button register, it just loading and nothing happened
        await browser.pause(2000)
    }

    public async setValueInputEmailAddress(email:string){
        const inputEmailAddressComponent = await this.inputEmailAddressComponent
        await inputEmailAddressComponent.waitForDisplayed()

        await inputEmailAddressComponent.click()
        await inputEmailAddressComponent.setValue(email)
        await expect(inputEmailAddressComponent).toHaveValue(email)
        // need to pause because with no explicit reason when i try to click button register, it just loading and nothing happened
        await browser.pause(2000)
    }

    public async setValueInputPassword(password:string){
        const inputPasswordComponent = await this.inputPasswordComponent
        await inputPasswordComponent.waitForDisplayed()

        await inputPasswordComponent.click()
        await inputPasswordComponent.setValue(password)
        await expect(inputPasswordComponent).toHaveValue(password)
        // need to pause because with no explicit reason when i try to click button register, it just loading and nothing happened
        await browser.pause(2000)
    }

    public async setValueInputFullName(fullname:string){
        const inputFullNameComponent = await this.inputFullNameComponent
        await inputFullNameComponent.waitForDisplayed()

        await inputFullNameComponent.click()
        await inputFullNameComponent.setValue(fullname)
        await expect(inputFullNameComponent).toHaveValue(fullname)
        // need to pause because with no explicit reason when i try to click button register, it just loading and nothing happened
        await browser.pause(2000)
    }
    
    public async assertUserIsInRegisterPage(){
        const titleFormComponent = await this.titleFormComponent
        await titleFormComponent.waitForDisplayed()

        await expect(titleFormComponent).toHaveText("Pelanggan Baru?")
        // need to pause because with no explicit reason when i try to click button register, it just loading and nothing happened
        await browser.pause(2000)
    }
}

export default new RegisterPage()