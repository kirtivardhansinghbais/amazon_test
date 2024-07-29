import { dashBoardData } from "../data/dashBoardData"
import { loginData } from "../data/loginData"
import commonPage from "./commonPage"
const { expect } = require('@playwright/test')

const { I } = inject()

class LoginPage {

  /**
  * Login and verify user name.
  * @param username
  * @param phoneNumber
  * @param password
  */
  async login(username: string, phoneNumberOrEmail: string, password: string) {
    // Verify the account option.
    I.seeElement(await commonPage.elementById(loginData.elements.accountById))
    // Click on the account option.
    I.click(await commonPage.elementById(loginData.elements.accountById))
    // Verify email or phone number field.
    I.seeElement(await commonPage.elementByType(loginData.elements.emailOrPhonenumberByType))
    // Type email or phone number.
    I.fillField(await commonPage.elementByType(loginData.elements.emailOrPhonenumberByType), phoneNumberOrEmail)
    // Verify continue button.
    I.seeElement(await commonPage.elementByType(loginData.elements.continueButtonByType))
    // Click on continue button.
    I.click(await commonPage.elementByType(loginData.elements.continueButtonByType))
    // Verify the password field.
    I.seeElement(await commonPage.elementById(loginData.elements.passwordById))
    // Type the password.
    I.fillField(await commonPage.elementById(loginData.elements.passwordById), password)
    // Verify the sign in button.
    I.seeElement(await commonPage.elementById(loginData.elements.signInButtonById))
    // Click on the sign in button.
    I.click(await commonPage.elementById(loginData.elements.signInButtonById))
    // Verify the account option.
    I.seeElement(await commonPage.elementById(loginData.elements.accountById))
    // Added wait for 5 sec.
    I.wait(5)
    // Hover over the account option.
    I.moveCursorTo(await commonPage.elementById(loginData.elements.accountById))
    //Verify the manage account button.
    I.waitForElement(await commonPage.elementByDataTestId(dashBoardData.elements.manageProfileButtonByDataTestId), 10)
    // Click on the manage account button.
    I.click(await commonPage.elementByDataTestId(dashBoardData.elements.manageProfileButtonByDataTestId))
    //Verify the who is shopping pop up.
    I.seeElement(await commonPage.elementByText(dashBoardData.elements.whoIsShoppingPopUpByText))
    // Verify user name.
    I.see(username, await commonPage.elementByDataTestId(dashBoardData.elements.userAccountByDataTestId))
    // Verify account holder title.
    I.see("Account holder", await commonPage.elementByDataTestId(dashBoardData.elements.userAccountByDataTestId))
    //ssssssVerify the close button.
    I.seeElement(await commonPage.elementByAriaLabel(dashBoardData.elements.closeButtonByAriaLabel))
    // Click on the close button.
    I.click(await commonPage.elementByAriaLabel(dashBoardData.elements.closeButtonByAriaLabel))

  }

}

export = new LoginPage()
