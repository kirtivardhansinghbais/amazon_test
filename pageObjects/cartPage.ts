import { dashBoardData } from "../data/dashBoardData"
import { productData } from "../data/productData"
import commonPage from "./commonPage"

const { I } = inject()

class CartPage {

  /**
  * Verify product in cart.
  * @param productName
  */
  async verifyCart(productName: string) {
    // Verify the cart buton.
    I.waitForElement(await commonPage.elementById(dashBoardData.elements.cartById), 10)
    // Click on the cart button.
    I.click(await commonPage.elementById(dashBoardData.elements.cartById))
    // Verify shoping cart.
    I.seeElement(await commonPage.elementById(productData.elements.shoppingCartById))
    // Verify the product in cart.
    I.see(productName, await commonPage.elementByText(productName))
  }

  /**
  * Delete product in cart.
  * @param productName
  */
  async deleteProduct(productName: string) {
    // Verify the delete buton.
    I.seeElement(await commonPage.deleteByAriaLable(productName))
    // Click the delete buton.
    I.click(await commonPage.deleteByAriaLable(productName))
    // Added wait for 2 sec.
    I.wait(2)
  }
}
export = new CartPage()