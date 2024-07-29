import { dashBoardData } from "../data/dashBoardData"
import { loginData } from "../data/loginData"

const { I } = inject()

class CommonPage {

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
  * element by id
  * @param value
  */
  async elementById(value: string) {
    return locate(`//*[@id='${value}']`)
  }

  /**
  * element by data-testid
  * @param value
  */
  async elementByDataTestId(value: string) {
    return locate(`//*[@data-testid='${value}']`)
  }

  /**
  * element by type
  * @param value
  */
  async elementByType(value: string) {
    return locate(`//*[@type='${value}']`)
  }

  /**
  * delete by area lable
  * @param value
  */
  async deleteByAriaLable(value: string) {
    return locate(`//*[@aria-label=('Delete ${value}')]`)
  }

  /**
  * Search product by name.
  * @param productName
  */
  async searchProduct(productName: string) {
    // Verify the search bar.
    I.seeElement(await this.elementById(dashBoardData.elements.searchBarById))
    // Type the product name.
    I.fillField(await this.elementById(dashBoardData.elements.searchBarById), productName)
    // Verify search button.
    I.seeElement(await this.elementById(dashBoardData.elements.searchButtonById))
    // Click on search button.
    I.click(await this.elementById(dashBoardData.elements.searchButtonById))
    // Wait for the search result element to be viisible.
    I.waitForElement(await this.elementByText(dashBoardData.elements.resultsByText), 10)
  }

  /**
  * Navigate to home page.
  */
  async navigateToHomePage() {
    // Verify the amazon logo.
    I.seeElement(await this.elementById(dashBoardData.elements.logoById))
    // Click on the amazon logo.
    I.click(await this.elementById(dashBoardData.elements.logoById))
  }

  /**
  * Logout.
  */
  async logout() {
    // Verify the account option.
    I.seeElement(await this.elementById(loginData.elements.accountById))
    // Hover over the account option.
    I.moveCursorTo(await this.elementById(loginData.elements.accountById))
    // Verify the sign out button.
    I.seeElement(await this.elementById(dashBoardData.elements.signOutById))
    // Click on the sign out button.
    I.click(await this.elementById(dashBoardData.elements.signOutById))
  }
}
export = new CommonPage()