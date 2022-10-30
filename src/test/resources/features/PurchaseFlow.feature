@PurchaseFlow

  Feature: Purchase flow

    Scenario: User will sort item by Name (Z to A)
      Given User open the web page
      When User input "standard_user" as userName and "secret_sauce" as password
      Then User sort product list by "Name (Z to A)"
      Then User choose first item "Test.allTheThings() T-Shirt (Red)" and checkout to cart
      And User choose second item "Sauce Labs Onesie" and checkout to cart
      Then User click Cart Icon
      Then User click button remove item
      And User click button checkout
      Then User input "Rezki" as firstname and "Adina" as lasname and "123" as postalcode
      And User click button continue
      Then User verify total item "Item total: $7.99" as expected total item
      And User verify tax item "Tax: $0.64" as expected tax item
      And User verifiy Total price "Total: $8.63" as expected total price
      Then User click button Finish
      Then User verify "THANK YOU FOR YOUR ORDER" as finishing text