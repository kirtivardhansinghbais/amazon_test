import loginPage from './pageObject/loginPage'
import commonPage from './pageObject/commonPage'
import productPage from './pageObject/productPage'

let phoneNumber= "9993056686"
let password= "9425442297"
let userName= "kirti vardhan singh bais"
let productName="ZEBRONICS USB Keyboard with Rupee Key, USB Interface and Retractable stand - K20"

Feature('Amazon');

Scenario('login and add product', async ({ I }) => {
    await I.amOnPage('/')
    await loginPage.login(userName, phoneNumber, password)
    await commonPage.navigateToHomePage()
    await commonPage.searchProduct(productName)
    await productPage.addProduct(productName)
    await commonPage.verifyCart(productName)
    await commonPage.logout()
    
})
 