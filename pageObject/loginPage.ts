import { loginData } from "../data/loginData";
import commonPage from "./commonPage";
const { expect } = require('@playwright/test')

const { I } = inject()


class LoginPage {

  async login(username: string, password: string) {
    expect(await commonPage.elementById(loginData.elements.signInById)).toBeVisible()
    I.click(await commonPage.elementById(loginData.elements.signInById))
    expect(await commonPage.elementByType(loginData.elements.emailByType)).toBeVisible()
    I.fillField(await commonPage.elementByType(loginData.elements.emailByType), username)
    I.click(await commonPage.elementByType(loginData.elements.continueButtonByType))
    expect(await commonPage.elementById(loginData.elements.passwordById)).toBeVisible()
    I.fillField(await commonPage.elementById(loginData.elements.passwordById), password)
    expect(await commonPage.elementById(loginData.elements.signInButtonById)).toBeVisible()
    I.click(await commonPage.elementById(loginData.elements.signInButtonById))
    I.wait(2)
  }

  // async searchAndAddProduct(productName: string) {
  //   I.fillField('#twotabsearchtextbox', productName)
  //   I.click('input.nav-input[type="submit"]')
  //   I.waitForElement('//div[@data-asin]', 10)
  //   I.click('//div[@data-asin]//h2/a')
  //   I.waitForElement('#add-to-cart-button', 10)
  //   I.click('#add-to-cart-button')
  // }

  // async navigateToHomePageFromProduct() {
  //   I.click('#nav-logo-sprites')
  // }

  // async verifyCart(productName: string) {
  //   I.click('#nav-cart')
  //   I.see(productName, '.sc-list-item-content')
  // }
}

export = new LoginPage()
