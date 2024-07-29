import loginPage from '../pageObject/loginPage'
import commonPage from '../pageObject/commonPage'
import productPage from '../pageObject/productPage'

//Enter users phone number.
let phoneNumberOrEmail = "Please enter your email or phone number."
//Enter users password.
let password = "Please enter your password."
//Enter user name.
let userName = "Please enter your user name."
//Enter product name.
let productName = "ZEBRONICS USB Keyboard with Rupee Key, USB Interface and Retractable stand - K20"

Feature('Amazon cart')

Scenario('login and add product to cart', async ({ I }) => {
    // Go to login page.
    await I.amOnPage('/')
    // Login wit valid credentials.
    await loginPage.login(userName, phoneNumberOrEmail, password)
    //Navigate to home page.
    await commonPage.navigateToHomePage()
    //Search product.
    await commonPage.searchProduct(productName)
    //Add product to cart.
    await productPage.addProduct(productName)
    //Verify the product in cart.
    await commonPage.verifyCart(productName)
    //Logout
    await commonPage.logout()

})
