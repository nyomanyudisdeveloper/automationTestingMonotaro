import {$, expect} from "@wdio/globals"

class SignUpSuccessPage {
    public get successTitleComponent(){
        return $("div[class='text-a']")
    }

    public async assertUserIsInSignUpSuccessPage(){
        const successTitleComponent = await this.successTitleComponent
        await successTitleComponent.waitForDisplayed()

        await expect(successTitleComponent).toHaveText("Pendaftaran Berhasil")
    }
}

export default new SignUpSuccessPage()