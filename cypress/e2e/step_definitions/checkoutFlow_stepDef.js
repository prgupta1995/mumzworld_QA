import { checkoutFlow } from '../../page-objects/checkoutFlow_page';

import {
  Given,
  When,
  Then,
} from '@badeball/cypress-cucumber-preprocessor';

import Chance from 'chance';  // Import the chance library
const chance = new Chance(); 

const e2eCheckoutFlow = new checkoutFlow();

Given(/^Open the mumzworld web store$/, function () {
  e2eCheckoutFlow.goToHomePage();
});

When(/^Enter the search keyword \"([^\"]*)\" in the search box and press enter$/, function (searchTxt) {
    e2eCheckoutFlow.seachProduct(searchTxt);
});

Then(/^Searched Results are displayed and contains \"([^\"]*)\"$/, function (searchedResultTxt) {
  e2eCheckoutFlow.displaySearchedResult(searchedResultTxt);
});

Then(/^Add the first product to the cart and verify the same product on the cart page$/, function () {
  e2eCheckoutFlow.addToCartAndVerifyProductInCart();
});

Then(/^Increase the product qty to \"([^\"]*)\"$/, function (qty) {
  e2eCheckoutFlow.increaseProductQuantity(qty);
});

Then(/^Click on the Proceed to Checkout button and verify that the user lands on the \"([^\"]*)\" page$/, function (txtSignIn) {
  e2eCheckoutFlow.clickProceedToCheckout();
  e2eCheckoutFlow.VerifySignInPage(txtSignIn);
});

Then(/^Click the Click Account link and enter \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\", click on the Create Account button$/, function (firstName, lastName, email, password) {
  e2eCheckoutFlow.createAccount(firstName, lastName, email, password);
});


Then(/^Verify that the account is successfully by checking the \"([^\"]*)\" page$/, function (shippingPageTxt) {
  e2eCheckoutFlow.verifyShippingAddressTxt(shippingPageTxt);
});