const locators = {
  searchtxtBox: '#search_textbox',
  searchedResults: '#categoryPage h2',
  productName: 'a[class^="ProductCard_productName"]',
  quickAddCartBtn: '#add_cart_button',
  cartBtn: '#cart_button',
  increaseProductQty: '[class^="ProductQuantity_root"] input[type="number"]',
  productNameInCart: 'ul h3 a',
  proceedToCheckoutBtn: 'button[title="Proceed to Checkout"]',
  signInText: 'h1.text-xxl',
  createAccountLink: '#create_account_button',
  createAccFirstName: '#firstname',
  createAccLastName: '#lastname',
  createAccEmail: '#email',
  createAccPassword: '#password',
  createAccBtn: '#register_btn',
  shippingAddressTxt: '[class^="shippingInformation-header"]',
};

export class checkoutFlow {
  //open the web url
  goToHomePage() {
    cy.visit("/", {
      headers: {
        "Accept-Encoding": "gzip, deflate, br",
      }
    });
  }
  
  seachProduct(searchTxt) {
    cy.get(locators.searchtxtBox)
      .click()
      .type(searchTxt)
      .type('{enter}');
  }

  displaySearchedResult(serachedResultTxt) {
    cy.get(locators.searchedResults)
      .invoke('text')
      .should('contain', serachedResultTxt);
  }

  quickAddtoCart() {
    cy.get(locators.quickAddCartBtn)
      .first()
      .click();
    cy.wait(4000);
  }

  goToCartPage() {
    cy.get(locators.cartBtn).click();
  }

  fetchProductNameFromSearchedResultPage() {
    return cy.get(locators.productName).first().invoke('text');
  }

  addedProductNameInCart(productNameTxt) {
      cy.get(locators.productNameInCart).invoke('text').then((text) => {
        expect(productNameTxt).to.equal(text);
      })
  }

  addToCartAndVerifyProductInCart() {
    this.quickAddtoCart();
  
    this.fetchProductNameFromSearchedResultPage().then((productNameTxt) => {
      this.goToCartPage();
      console.log({ productNameTxt });
      this.addedProductNameInCart(productNameTxt);
    });
  }

  increaseProductQuantity(qty) {
    cy.get(locators.increaseProductQty)
      .clear() // Clear the existing value
      .type(qty);
  }

  clickProceedToCheckout() {
    cy.get(locators.proceedToCheckoutBtn)
      .click();
  }

  VerifySignInPage(txtSignIn) {
  cy.get(locators.signInText)
    .invoke('text')
    .should('eq', txtSignIn);
  }
  
  createAccountLink() {
    cy.get(locators.createAccountLink).click();
  }

  createAccount(firstName, lastName, email, password) {
    this.createAccountLink();
    this.enterFirstNameTxt(firstName);
    this.enterLastNameTxt(lastName);
    this.enterEmail(email);
    this.enterPasswordTxt(password);
    this.clickCreateAccountBtn();
  }

   //Generate a random text
   generateRandomText(length) {
      const randomText = chance.string({ length: length, pool: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ' }); 
      return randomText;
   }

   enterFirstNameTxt(firstName) {
      cy.get(locators.createAccFirstName).click().type(firstName);
   }

   enterLastNameTxt(lastName) {
      cy.get(locators.createAccLastName).click().type(lastName);
   }
    
  enterEmail(email) {
    const randomText = this.generateRandomText(6);
    const [emailText, domain] = email.split('@');

    const randomizedEmail = `${emailText}+${randomText}@${domain}`;  // suffix the email string with random text and domain part
    cy.get(locators.createAccEmail).type(randomizedEmail);
  }

   enterPasswordTxt(password) {
    cy.get(locators.createAccPassword).click().type(password);
   }
  
  clickCreateAccountBtn() {
    cy.get(locators.createAccBtn).click();
  }

  verifyShippingAddressTxt(shippingPageTxt) {
    cy.get(locators.shippingAddressTxt)
      .invoke('text').
      should('eq', shippingPageTxt);
  }
  
}