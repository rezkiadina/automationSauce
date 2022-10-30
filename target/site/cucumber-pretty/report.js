$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/LoginSauce.feature");
formatter.feature({
  "line": 2,
  "name": "Login",
  "description": "As a user i want to login to sauce demo",
  "id": "login",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    }
  ]
});
formatter.before({
  "duration": 324968856200,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Normal Login",
  "description": "",
  "id": "login;normal-login",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "User open the web page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User input \"standard_user\" as userName and \"secret_sauce\" as password",
  "keyword": "When "
});
formatter.match({
  "location": "loginSteps.verifyLoginPage()"
});
formatter.result({
  "duration": 212413000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "standard_user",
      "offset": 12
    },
    {
      "val": "secret_sauce",
      "offset": 44
    }
  ],
  "location": "loginSteps.inputCredential(String,String)"
});
formatter.result({
  "duration": 290145300,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 9,
  "name": "Invalid Login",
  "description": "",
  "id": "login;invalid-login",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "User open the web page",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "User input \"\u003cuserName\u003e\" as userName and \"\u003cpassword\u003e\" as password",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "User will see \"\u003cerrorText\u003e\" on login page",
  "keyword": "Then "
});
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": "login;invalid-login;",
  "rows": [
    {
      "cells": [
        "userName",
        "password",
        "errorText"
      ],
      "line": 14,
      "id": "login;invalid-login;;1"
    },
    {
      "cells": [
        "asd",
        "secret_sauce",
        "Epic sadface: Username and password do not match any user in this service"
      ],
      "line": 15,
      "id": "login;invalid-login;;2"
    },
    {
      "cells": [
        "standard_user",
        "123",
        "Epic sadface: Username and password do not match any user in this service"
      ],
      "line": 16,
      "id": "login;invalid-login;;3"
    },
    {
      "cells": [
        "asd",
        "123",
        "Epic sadface: Username and password do not match any user in this service"
      ],
      "line": 17,
      "id": "login;invalid-login;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 20887524600,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Invalid Login",
  "description": "",
  "id": "login;invalid-login;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "User open the web page",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "User input \"asd\" as userName and \"secret_sauce\" as password",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "User will see \"Epic sadface: Username and password do not match any user in this service\" on login page",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "loginSteps.verifyLoginPage()"
});
formatter.result({
  "duration": 154937000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "asd",
      "offset": 12
    },
    {
      "val": "secret_sauce",
      "offset": 34
    }
  ],
  "location": "loginSteps.inputCredential(String,String)"
});
formatter.result({
  "duration": 241567200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Epic sadface: Username and password do not match any user in this service",
      "offset": 15
    }
  ],
  "location": "loginSteps.displayErrorMassage(String)"
});
formatter.result({
  "duration": 33454900,
  "status": "passed"
});
formatter.before({
  "duration": 13473922200,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Invalid Login",
  "description": "",
  "id": "login;invalid-login;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "User open the web page",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "User input \"standard_user\" as userName and \"123\" as password",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "User will see \"Epic sadface: Username and password do not match any user in this service\" on login page",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "loginSteps.verifyLoginPage()"
});
formatter.result({
  "duration": 75367400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "standard_user",
      "offset": 12
    },
    {
      "val": "123",
      "offset": 44
    }
  ],
  "location": "loginSteps.inputCredential(String,String)"
});
formatter.result({
  "duration": 261271900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Epic sadface: Username and password do not match any user in this service",
      "offset": 15
    }
  ],
  "location": "loginSteps.displayErrorMassage(String)"
});
formatter.result({
  "duration": 32389100,
  "status": "passed"
});
formatter.before({
  "duration": 15206764300,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Invalid Login",
  "description": "",
  "id": "login;invalid-login;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "User open the web page",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "User input \"asd\" as userName and \"123\" as password",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "User will see \"Epic sadface: Username and password do not match any user in this service\" on login page",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "loginSteps.verifyLoginPage()"
});
formatter.result({
  "duration": 72994500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "asd",
      "offset": 12
    },
    {
      "val": "123",
      "offset": 34
    }
  ],
  "location": "loginSteps.inputCredential(String,String)"
});
formatter.result({
  "duration": 292964400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Epic sadface: Username and password do not match any user in this service",
      "offset": 15
    }
  ],
  "location": "loginSteps.displayErrorMassage(String)"
});
formatter.result({
  "duration": 37904300,
  "status": "passed"
});
formatter.uri("features/PurchaseFlow.feature");
formatter.feature({
  "line": 3,
  "name": "Purchase flow",
  "description": "",
  "id": "purchase-flow",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@PurchaseFlow"
    }
  ]
});
formatter.before({
  "duration": 22530755700,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "User will sort item by Name (Z to A)",
  "description": "",
  "id": "purchase-flow;user-will-sort-item-by-name-(z-to-a)",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "User open the web page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User input \"standard_user\" as userName and \"secret_sauce\" as password",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User sort product list by \"Name (Z to A)\"",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User choose first item \"Test.allTheThings() T-Shirt (Red)\" and checkout to cart",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User choose second item \"Sauce Labs Onesie\" and checkout to cart",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User click Cart Icon",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "User click button remove item",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "User click button checkout",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User input \"Rezki\" as firstname and \"Adina\" as lasname and \"123\" as postalcode",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "User click button continue",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User verify total item \"Item total: $7.99\" as expected total item",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "User verify tax item \"Tax: $0.64\" as expected tax item",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User verifiy Total price \"Total: $8.63\" as expected total price",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User click button Finish",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "User verify \"THANK YOU FOR YOUR ORDER\" as finishing text",
  "keyword": "Then "
});
formatter.match({
  "location": "loginSteps.verifyLoginPage()"
});
formatter.result({
  "duration": 54200700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "standard_user",
      "offset": 12
    },
    {
      "val": "secret_sauce",
      "offset": 44
    }
  ],
  "location": "loginSteps.inputCredential(String,String)"
});
formatter.result({
  "duration": 297260400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Name (Z to A)",
      "offset": 27
    }
  ],
  "location": "purchaseSteps.selectProductCart(String)"
});
formatter.result({
  "duration": 3296313400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test.allTheThings() T-Shirt (Red)",
      "offset": 24
    }
  ],
  "location": "purchaseSteps.addToCart1(String)"
});
formatter.result({
  "duration": 59877100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sauce Labs Onesie",
      "offset": 25
    }
  ],
  "location": "purchaseSteps.addToCart2(String)"
});
formatter.result({
  "duration": 72958600,
  "status": "passed"
});
formatter.match({
  "location": "purchaseSteps.clickToCartIcon()"
});
formatter.result({
  "duration": 57115500,
  "status": "passed"
});
formatter.match({
  "location": "purchaseSteps.removeItem()"
});
formatter.result({
  "duration": 52859700,
  "status": "passed"
});
formatter.match({
  "location": "purchaseSteps.checkoutItem()"
});
formatter.result({
  "duration": 59001600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Rezki",
      "offset": 12
    },
    {
      "val": "Adina",
      "offset": 37
    },
    {
      "val": "123",
      "offset": 60
    }
  ],
  "location": "purchaseSteps.inputCredential2(String,String,String)"
});
formatter.result({
  "duration": 250622500,
  "status": "passed"
});
formatter.match({
  "location": "purchaseSteps.clickButtonContinue()"
});
formatter.result({
  "duration": 135891800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Item total: $7.99",
      "offset": 24
    }
  ],
  "location": "purchaseSteps.totalItem(String)"
});
formatter.result({
  "duration": 33993800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tax: $0.64",
      "offset": 22
    }
  ],
  "location": "purchaseSteps.taxItem(String)"
});
formatter.result({
  "duration": 27060400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Total: $8.63",
      "offset": 26
    }
  ],
  "location": "purchaseSteps.totalPrice(String)"
});
formatter.result({
  "duration": 29984300,
  "status": "passed"
});
formatter.match({
  "location": "purchaseSteps.clickButtonFinish()"
});
formatter.result({
  "duration": 65028900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "THANK YOU FOR YOUR ORDER",
      "offset": 13
    }
  ],
  "location": "purchaseSteps.finishingText(String)"
});
formatter.result({
  "duration": 39204300,
  "status": "passed"
});
});