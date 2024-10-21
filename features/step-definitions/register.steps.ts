import {Given, When, Then} from "@wdio/cucumber-framework"
import HeaderPage from "../pageobjects/header.page"
import RegisterPage from "../pageobjects/register.page"
import {browser} from "@wdio/globals"
import { generateRandomEmail } from "../utils"
import SignUpSuccessPage from "../pageobjects/signUpSuccess.page"

When("User click Daftar Akun in Header Component", async () => {
    await HeaderPage.clickDaftarAkunButton()
})

Then("Assert User is in Register Page", async () => {
    await RegisterPage.assertUserIsInRegisterPage()
})

When("User set value email address with random generate email in Register Page", async() => {
    const email = generateRandomEmail()
    await RegisterPage.setValueInputEmailAddress(email)
})

When(/^User set value password with (.+) in Register Page$/, async (password:string) => {
    await RegisterPage.setValueInputPassword(password)
})

When(/^User set value fullName with (.+) in Register Page$/, async (fullname:string) => {
    await RegisterPage.setValueInputFullName(fullname)
})

When(/^User set value phoneNumber with (.+) in Register Page$/, async (phoneNumber:string) => {
    await RegisterPage.setValueInputPhoneNumber(phoneNumber)
})

When(/^User click type account with (.+) in Register Page$/, async (typeAccount:string) => {
    await RegisterPage.clickTypeAccountRadioButton(typeAccount)
})

Then("Assert Customer Hint Individu is show in Register Page", async()=> {
    await RegisterPage.assertCustomerHintIndividuIsShow()
})

When("User click button Register in Register Page", async() => {
    await RegisterPage.clickRegisterButton()
})

Then("Assert User is in Sign Up Success Page", async() => {
    await SignUpSuccessPage.assertUserIsInSignUpSuccessPage()
})