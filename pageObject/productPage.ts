import { productData } from "../data/productData"
import { dashBoardData } from "../data/dashBoardData"
import commonPage from "./commonPage"

const { I } = inject()

class ProductPage {
    
    /**
    * Add product to cart.
    * @param productName
    */
    async addProduct(productName: string) {
    // Verify product is visible.
    I.seeElement(await commonPage.elementByText(productName))
    // Click on the product.
    I.click(await commonPage.elementByText(productName))
    // Switch to the new tab opened.
    I.switchToNextTab() 
    // Added wait for 5 sec.
    I.wait(5)
    // Wait fot product title element to be visible.
    I.waitForElement(await commonPage.elementById(productData.elements.productTitleById), 10)
    // Verify product name.
    I.see(productName, await commonPage.elementById(productData.elements.productTitleById))
    // Wait for add to cart button element to be visible.
    I.waitForElement(await commonPage.elementById(productData.elements.addToCartButtonById), 10)
    //  Click on the add to cart button.
    I.click(await commonPage.elementById(productData.elements.addToCartButtonById))
}
}

export = new ProductPage()