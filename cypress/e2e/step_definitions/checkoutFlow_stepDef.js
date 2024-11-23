import { checkoutFlow } from '../../page-objects/checkoutFlow_page';

import {
  Given,
  When,
  Then,
} from '@badeball/cypress-cucumber-preprocessor';

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