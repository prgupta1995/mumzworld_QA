Feature: User is able to perform the e2e checkout flow with registration

Background:
  Given Open the mumzworld web store
  
Scenario: Verify that user is able to search the product, add the product into the cart, go to the bag, increase the qty, perform the checkout and register the user successfully
  When Enter the search keyword "Pacifier" in the search box and press enter
  Then Searched Results are displayed and contains "Pacifier"





