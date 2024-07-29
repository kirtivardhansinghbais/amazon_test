import { loginData } from "../data/loginData"
import commonPage from "./commonPage"
const { expect } = require('@playwright/test')

const { I } = inject()

class LoginPage {

  async login(username: string, phoneNumber: string, password: string) {
    I.seeElement(await commonPage.elementById(loginData.elements.accountById))
    I.click(await commonPage.elementById(loginData.elements.accountById))
    I.seeElement(await commonPage.elementByType(loginData.elements.emailByType))
    I.fillField(await commonPage.elementByType(loginData.elements.emailByType), phoneNumber)
    I.click(await commonPage.elementByType(loginData.elements.continueButtonByType))
    I.seeElement(await commonPage.elementById(loginData.elements.passwordById))
    I.fillField(await commonPage.elementById(loginData.elements.passwordById), password)
    I.seeElement(await commonPage.elementById(loginData.elements.signInButtonById))
    I.click(await commonPage.elementById(loginData.elements.signInButtonById))
    I.seeElement(await commonPage.elementById(loginData.elements.accountById))
    I.click(await commonPage.elementById(loginData.elements.accountById))
    I.seeElement(await commonPage.elementByText(loginData.elements.shoppingProgramByText))
    I.seeElement(await commonPage.elementByText(loginData.elements.manageYourProfilesByText))
    I.click(await commonPage.elementByText(loginData.elements.manageYourProfilesByText))
    I.see("Manage your Profiles", await commonPage.elementById(loginData.elements.manageYourProfilesHeadingById))
    I.click(await commonPage.elementByNameAndFollowingP(loginData.elements.userProfileByName))
    I.see(username, await commonPage.elementById(loginData.elements.profileNameBtId))
    I.see("Account holder",await commonPage.elementById(loginData.elements.profleType))

  }

}

export = new LoginPage()
