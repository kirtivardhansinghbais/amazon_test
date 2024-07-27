const { I } = inject();

class AmazonPage {
  navigateToHomePage() {
    I.amOnPage('/');
  }

  async login(username: string, password: string) {
    I.click('#nav-link-accountList');
    I.click('#ap_email');
    I.fillField('#ap_email', username);
    I.click('#continue');
    I.fillField('#ap_password', password);
    I.click('#signInSubmit');   
  }

  async searchAndAddProduct(productName: string) {
    I.fillField('#twotabsearchtextbox', productName);
    I.click('input.nav-input[type="submit"]');
    I.waitForElement('//div[@data-asin]', 10);
    I.click('//div[@data-asin]//h2/a');
    I.waitForElement('#add-to-cart-button', 10);
    I.click('#add-to-cart-button');
  }

  async navigateToHomePageFromProduct() {
    I.click('#nav-logo-sprites');
  }

  async verifyCart(productName: string) {
    I.click('#nav-cart');
    I.see(productName, '.sc-list-item-content');
  }
}

export = new AmazonPage();
