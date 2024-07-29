import loginPage from '../pageObjects/loginPage'
import commonPage from '../pageObjects/commonPage'
import productPage from '../pageObjects/productPage'
import cartPage from '../pageObjects/cartPage'

// Enter users phone number.
let phoneNumberOrEmail = "Please enter your email or phone number for Amazon account."
// Enter users password.
let password = "Please enter your password for Amazon acount"
// Enter user name.
let userName = "Please enter your Amazon account user name"
// Enter product name.
let productName = "ZEBRONICS USB Keyboard with Rupee Key, USB Interface and Retractable stand - K20"

Feature('Amazon cart')

// Before each.
Before(({ I }) => {
  // Go to login page.
  I.amOnPage('/')
})

Scenario('login and add product to cart', async ({ I }) => {
  // Login wit valid credentials.
  await loginPage.login(userName, phoneNumberOrEmail, password)
  // Navigate to home page.
  await commonPage.navigateToHomePage()
  // Search product.
  await commonPage.searchProduct(productName)
  // Add product to cart.
  await productPage.addProduct(productName)
  // Verify the product in cart.
  await cartPage.verifyCart(productName)
  // Delete product from cart.
  await cartPage.deleteProduct(productName)
})

// After each
After(({ I }) => {
  // Logout      
  commonPage.logout()
})
