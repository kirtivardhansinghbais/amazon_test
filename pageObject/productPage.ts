import { productData } from "../data/productData"
import { dashBoardData } from "../data/dashBoardData"
import commonPage from "./commonPage"

const { I } = inject()

class ProductPage {
    
    async addProduct(productName: string) {
    I.seeElement(await commonPage.elementByText(productName))
    I.click(await commonPage.elementByText(productName))
    I.switchToNextTab() // Switch to the new tab opened
    I.wait(5)
    I.waitForElement(await commonPage.elementById(productData.elements.productTitleById), 10)
    I.see(productName, await commonPage.elementById(productData.elements.productTitleById))
    I.waitForElement(await commonPage.elementById(productData.elements.addToCartButtonById), )
    I.click(await commonPage.elementById(productData.elements.addToCartButtonById))
}
}

export = new ProductPage()