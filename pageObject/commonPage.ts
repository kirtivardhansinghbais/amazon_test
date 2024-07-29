import { dashBoardData } from "../data/dashBoardData"
import { loginData } from "../data/loginData"

const { I } = inject()

class CommonPage {

  /**
  * element by data id
  * @param value
  */
  async elementByDataId(value: string) {
    return locate(`//*[@data-id='${value}']`)
  }

  /**
  * element by text
  * @param value
  */
  async elementByText(value: string) {
    return locate(`//*[text()='${value}']`)
  }

  /**
  * element by arial lable.
  * @param value
  */
  async elementByAriaLabel(value: string) {
    return locate(`//*[@aria-label='${value}']`)
  }

  /**
  * element by placeholder
  * @param value
  */
  async elementByPlaceholder(value: string) {
    return locate(`//*[@placeholder='${value}']`)
  }

  /**
  * element by id
  * @param value
  */
  async elementById(value: string) {
    return locate(`//*[@id='${value}']`)
  }

  /**
  * element by type
  * @param value
  */
  async elementByType(value: string) {
    return locate(`//*[@type='${value}']`)
  }

  /**
  * element by Id and folllowing P
  * @param value
  */
  async elementByIdAndFollowingP(value: string) {
    return locate(`(//*[@id='${value}']//following-sibling::p)`)
  }

  /**
  * element by name
  * @param value
  */
  async elementByName(value: string) {
    return locate(`(//*[@name='${value}']`)
  }

  /**
  * element by name and following span class
  * @param value
  */
  async elementByNameAndFollowingSpan(value: string) {
    return locate(`(//input[@name='${value}']//following::span)`)
  }

  /**
  * element by Id following-sibling and value
  * @param value1
  * @param value2
  */
  async elementByIdAndValue(value1: string, value2: string) {
    return locate(` //*[@id='${value1}']//following-sibling::*[@value='${value2}']`)
  }

  /**
  * element by h1 and text
  * @param value1
  */
  async elementByh1AndText(value: string) {
    return locate(`//h1[contains(text(),${value})]`)
  }

  /**
  * Search product by name.
  * @param productName
  */
  async searchProduct(productName: string) {
    //Verify the search bar.
    I.seeElement(await this.elementById(dashBoardData.elements.searchBarById))
    //Type the product name.
    I.fillField(await this.elementById(dashBoardData.elements.searchBarById), productName)
    //Verify search button.
    I.seeElement(await this.elementById(dashBoardData.elements.searchButtonById))
    //Click on search button.
    I.click(await this.elementById(dashBoardData.elements.searchButtonById))
    //Wait for the search result element to be viisible.
    I.waitForElement(await this.elementByText(dashBoardData.elements.resultsByText), 10)
  }

  /**
  * Navigate to home page.
  */
  async navigateToHomePage() {
    //Verify the amazon logo.
    I.seeElement(await this.elementById(dashBoardData.elements.logoById))
    //Click on the amazon logo.
    I.click(await this.elementById(dashBoardData.elements.logoById))
  }

  /**
  * Verify product in cart.
  */
  async verifyCart(productName: string) {
    //Verify the cart buton.
    I.seeElement(await this.elementById(dashBoardData.elements.cartById))
    //Click on the cart button.
    I.click(await this.elementById(dashBoardData.elements.cartById))
    //Verify the product in cart.
    I.see(productName, await this.elementByText(productName))
  }

  /**
  * Logout.
  */
  async logout() {
    //Hover over the account option.
    I.moveCursorTo(await this.elementById(loginData.elements.accountById))
    //Click on the sign out button.
    I.click(await this.elementById(dashBoardData.elements.signOutById))
  }
}
export = new CommonPage()