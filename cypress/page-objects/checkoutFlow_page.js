const locators = {
  searchtxtBox: '#search_textbox',
  searchedResults: '.items-center.justify-between .text-lg',
    
};

export class checkoutFlow {
  //open the web url
  goToHomePage() {
    cy.wait(3000);
    cy.visit("/", {
      headers: {
        "Accept": "*/*",
        "Accept-Encoding": "gzip, deflate, br",
        "Connection": "keep-alive"
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

  
}