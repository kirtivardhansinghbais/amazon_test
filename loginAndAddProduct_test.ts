import loginPage from './pageObject/loginPage'
import commonPage from './pageObject/commonPage'
import productPage from './pageObject/productPage'

// Enter users phone number.
let phoneNumberOrEmail = ""
// Enter users password.
let password = ""
// Enter user name.
let userName = ""
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
    await commonPage.verifyCart(productName) 
})

// After each
After(({ I }) => { 
    // Logout      
   commonPage.logout()
  })
