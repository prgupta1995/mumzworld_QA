const locators = {
  continueToShippingCTA: '.step #continue_button',
  emailIdMandatoryFieldMessageloc: '.step__sections .e_mail_val',
  firstNameMandatoryFieldMessageloc: '.step .f_name',
  lastNameMandatoryFieldMessageloc: '.step .l_name',
  addressNameMandatoryFieldMessageloc: '.step .c_add1',
  apartmentNameMandatoryFieldMessageloc: '.step .c_add2',
  emirateMandatoryFieldMessageloc: '.step .emirate',
  phoneMandatoryFieldMessageloc: '.step .f_phone',
  addressEmail: '[name="checkout[email]"]',
  addressFirstName: '#checkout_shipping_address_first_name',
  addressLastName: '#checkout_shipping_address_last_name',
  address: '#checkout_shipping_address_address1',
  addressApartmentTxtField: '#checkout_shipping_address_address2',
  addressSelectEmirates: '#checkout_shipping_address_province',
  addressPhoneNumber: '#checkout_shipping_address_phone',
  addressContinueToShippingBtn: '#continue_button',
  shippingAddressPageReturnToCartLink: '.step__footer__previous-link-content',
  selectCountry: 'select[name="checkout[shipping_address][country]"]',
  shippingMethodHeader: '.section.section--shipping-method #main-header',
  returnToInformationLink: '.step .step__footer__previous-link',
  addressSelectCountry: '.address-fields #checkout_shipping_address_country'
};

export class Checkout {
  languageSelectorePopUpClose() {
    cy.get().click();
  }

  clickOnContinuetoShippingCTA() {
    cy.get(locators.continueToShippingCTA).click();
  }

  verifyEmailIDMandatoryFieldValidation(emailIdMandatoryFieldMessage) {
    cy.get(locators.emailIdMandatoryFieldMessageloc).invoke('text').should('equal', emailIdMandatoryFieldMessage);
  }

  verifyFirstNameMandatoryFieldValidation(firstNameMandatoryFieldMessage) {
    cy.get(locators.firstNameMandatoryFieldMessageloc).invoke('text').should('equal', firstNameMandatoryFieldMessage);
  }

  verifyLastNameMandatoryFieldValidation(lastNameMandatoryFieldMessage) {
    cy.get(locators.lastNameMandatoryFieldMessageloc).invoke('text').should('equal', lastNameMandatoryFieldMessage);
  }

  verifyAddressMandatoryFieldValidation(addressMandatoryFieldMessage) {
    cy.get(locators.addressNameMandatoryFieldMessageloc).invoke('text').should('equal', addressMandatoryFieldMessage);
  }

  verifyApartmentMandatoryFieldValidation(apartmentMandatoryFieldMessage) {
    cy.get(locators.apartmentNameMandatoryFieldMessageloc).invoke('text').should('equal', apartmentMandatoryFieldMessage);
  }

  verifyEmirateMandatoryFieldValidation(emirateMandatoryFieldMessage) {
    cy.get(locators.emirateMandatoryFieldMessageloc).invoke('text').should('equal', emirateMandatoryFieldMessage);
  }

  verifyPhoneErrorFieldValidation(phoneMandatoryFieldMessage) {
    cy.get(locators.phoneMandatoryFieldMessageloc).invoke('text').should('equal', phoneMandatoryFieldMessage);
  }

  typeInAddressField(addressInput) {
    cy.get(locators.address).clear();
    cy.get(locators.address).type(addressInput);
  }

  typeInApartmentField(addressApartmentInput) {
    cy.get(locators.addressApartmentTxtField).clear();
    cy.get(locators.addressApartmentTxtField).type(addressApartmentInput);
  }

  typeInMobileField(mobileInput) {
    cy.get(locators.addressPhoneNumber).clear();
    cy.get(locators.addressPhoneNumber).type(mobileInput);
  }

  enterUserInformationWithoutAddress(
    email,
    firstName,
    lastName,
    phoneNo
  ) {
    cy.get(locators.addressEmail).type(email);
    cy.get(locators.addressFirstName).first().type(firstName);
    cy.get(locators.addressLastName).type(lastName);
    cy.get(locators.addressSelectEmirates).select('DU');
    cy.get(locators.addressPhoneNumber).type(phoneNo);
  }

  enterUserInformationWithoutMobile(
    email,
    firstName,
    lastName,
    addressInput,
    addressApartmentInput
  ) {
    cy.get(locators.addressEmail).type(email);
    cy.get(locators.addressFirstName).first().type(firstName);
    cy.get(locators.addressLastName).type(lastName);
    cy.get(locators.address).type(addressInput);
    cy.get(locators.addressApartmentTxtField).type(addressApartmentInput);
    cy.get(locators.addressSelectEmirates).select('DU');
  }

  enterAllUserInformation(
    email,
    firstName,
    lastName,
    addressInput,
    addressApartmentInput,
    emirateInput,
    mobileNumberInput
  ) {
    cy.get(locators.addressEmail).type(email);
    cy.get(locators.addressFirstName).first().type(firstName);
    cy.get(locators.addressLastName).type(lastName);
    cy.get(locators.address).type(addressInput);
    cy.get(locators.addressApartmentTxtField).type(addressApartmentInput);
    cy.get(locators.addressSelectEmirates).select(emirateInput);
    cy.get(locators.addressPhoneNumber).clear();
    cy.get(locators.addressPhoneNumber).type(mobileNumberInput);
  }

  verifyUserIsOnShippingPage() {
    cy.get(locators.shippingMethodHeader).contains('Shipping method')
  }

  clickOnReturnToInformation() {
    cy.get(locators.returnToInformationLink).click();
  }

  enterEmirate(emirateName) {
    cy.get(locators.addressSelectEmirates).select(emirateName);
  }

  selectCountry(selectCounty) {
    cy.get(locators.addressSelectCountry).select(selectCounty);
  }
}