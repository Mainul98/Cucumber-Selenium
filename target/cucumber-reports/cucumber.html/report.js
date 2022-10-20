$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "name": "User can login to ecommerce site",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "User can login with valid username and password",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User visited to the ecommerce site",
  "keyword": "Given "
});
formatter.step({
  "name": "User inputs the valid \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "User can login successfully",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "salman@test.com",
        "P@ssword123"
      ]
    },
    {
      "cells": [
        "testuser412@grr.la",
        "2t8zmqzL"
      ]
    }
  ]
});
formatter.scenario({
  "name": "User can login with valid username and password",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User visited to the ecommerce site",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.user_visited_to_the_ecommerce_site()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User inputs the valid \"salman@test.com\" and \"P@ssword123\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.user_inputs_the_valid_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User can login successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.user_can_login_successfully()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User can login with valid username and password",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User visited to the ecommerce site",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.user_visited_to_the_ecommerce_site()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User inputs the valid \"testuser412@grr.la\" and \"2t8zmqzL\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.user_inputs_the_valid_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User can login successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.user_can_login_successfully()"
});
formatter.result({
  "status": "passed"
});
});