Feature: User is able to perform the e2e checkout flow with registration

Background:
  Given Open the mumzworld web store
  
Scenario: Verify that user is able to search the product, add it to the cart, increase the quantity, perform the checkout, and register successfully
  When Enter the search keyword "Pacifier" in the search box and press enter
  Then Searched Results are displayed and contains "Pacifier"
  Then Add the first product to the cart and verify the same product on the cart page
  Then Increase the product qty to "5"
  Then Click on the Proceed to Checkout button and verify that the user lands on the "Sign In" page
  Then Click the Click Account link and enter "Pri", "Test", "pri@gmail.com", "Password@123", click on the Create Account button
  Then Verify that the account is successfully by checking the "Shipping address" page