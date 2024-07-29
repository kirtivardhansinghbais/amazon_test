import { dashBoardData } from "../data/dashBoardData"
import { loginData } from "../data/loginData"

const { I } = inject()

class CommonPage {

   /**
   * This function returns a locator that can find an element using XPath with the specified data-id value.
   */
 async elementByDataId(value: string) {
    return locate(`//*[@data-id='${value}']`)
  }

  /**
   * This function returns a locator that can find an element using XPath with the specified text value.
   */
  async elementByText(value: string) {
    return locate(`//*[text()='${value}']`)
  } 

  /**
    * This function returns a locator that can find <p> elements with the exact specified text content.
    */
  async elementByTextHeading(value: string) {
    return locate(`//p[text()='${value}']`)
  }

  /**
    * This function returns a locator that can find an element using XPath with the specified aria label value.
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
    * element by type
    * @param value
    */
 async elementByIdAndFollowingP(value1: string) {
  return locate(`(//*[@id='${value1}']//following-sibling::p)`)
}

 /**
    * element by name
    * @param value
    */
 async elementByName(value1: string) {
  return locate(`(//*[@name='${value1}']`)
 }

 /**
    * element by name and following P class
    * @param value
    */
 async elementByNameAndFollowingP(value1: string) {
  return locate(`(//input[@name='${value1}']//following::span)`)
 }

/**
    * element by Id following-sibling and value
    * @param value
    */
async elementByIdAndValue(value1: string, value2: string) {
  return locate(` //*[@id='${value1}']//following-sibling::*[@value='${value2}']`)
}

/**
    * element by h1 and text
    * @param value
    */
async elementByh1AndText(value1: string) {
  return locate(`//h1[contains(text(),${value1})]`)

}

  async searchProduct(productName: string) {
    I.seeElement(await this.elementById(dashBoardData.elements.searchBarById))
    I.fillField(await this.elementById(dashBoardData.elements.searchBarById), productName)
    I.seeElement(await this.elementById(dashBoardData.elements.searchButtonById))
    I.click(await this.elementById(dashBoardData.elements.searchButtonById))
    I.waitForElement(await this.elementByText(dashBoardData.elements.resultsByText), 10)
  }

  async navigateToHomePage() {
    I.seeElement(await this.elementById(dashBoardData.elements.logoById))
    I.click(await this.elementById(dashBoardData.elements.logoById))
  }

  async verifyCart(productName: string) {
    I.seeElement(await this.elementById(dashBoardData.elements.cartById))
    I.click(await this.elementById(dashBoardData.elements.cartById))
    I.see(productName, await this.elementByText(productName))
  }
  
  async logout() {
    I.moveCursorTo(await this.elementById(loginData.elements.accountById))
    I.click(await this.elementById(dashBoardData.elements.signOutById))
  }
}
  export = new CommonPage()