$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/Features/Flow.feature");
formatter.feature({
  "name": "To validate flow of booking",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "To validate booking flow of room",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user should be on login page",
  "keyword": "Given "
});
formatter.step({
  "name": "user should give username and password",
  "keyword": "When ",
  "rows": [
    {
      "cells": [
        "siva090195",
        "0IL7CE"
      ]
    }
  ]
});
formatter.step({
  "name": "user select \"\u003clocation\u003e\",hotel,room type",
  "keyword": "And ",
  "rows": [
    {
      "cells": [
        "Hotel Creek",
        "Hotel Sunshine",
        "Hotel Hervey",
        "Hotel Cornice"
      ]
    },
    {
      "cells": [
        "Standard",
        "Double",
        "Deluxe",
        "Super Deluxe"
      ]
    }
  ]
});
formatter.step({
  "name": "no of rooms",
  "keyword": "And ",
  "rows": [
    {
      "cells": [
        "1 - One",
        "2 - Two",
        "3 - Three"
      ]
    }
  ]
});
formatter.step({
  "name": "user enter checkin,checkout",
  "keyword": "And ",
  "rows": [
    {
      "cells": [
        "21/04/2021"
      ]
    },
    {
      "cells": [
        "22/04/2021"
      ]
    }
  ]
});
formatter.step({
  "name": "user enter adult, child and click",
  "keyword": "And ",
  "rows": [
    {
      "cells": [
        "1 - One",
        "2 - Two"
      ]
    },
    {
      "cells": [
        "0 - None",
        "1 - One"
      ]
    }
  ]
});
formatter.step({
  "name": "user select hotel and click continue",
  "keyword": "And "
});
formatter.step({
  "name": "user enter firstname,lastname,address",
  "keyword": "And ",
  "rows": [
    {
      "cells": [
        "firstname",
        "siva"
      ]
    },
    {
      "cells": [
        "lastname",
        "shanmugam"
      ]
    },
    {
      "cells": [
        "address",
        "495,east"
      ]
    }
  ]
});
formatter.step({
  "name": "user enter card no,card type,expmonth,expyear,cvv and click book",
  "keyword": "And ",
  "rows": [
    {
      "cells": [
        "cardno",
        "type",
        "month",
        "year",
        "cvv"
      ]
    },
    {
      "cells": [
        "1234567890123456",
        "VISA",
        "June",
        "2022",
        "786"
      ]
    },
    {
      "cells": [
        "7894561230123456",
        "VISA",
        "June",
        "2021",
        "786"
      ]
    }
  ]
});
formatter.step({
  "name": "User should be in booking confirmation page",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "location"
      ]
    },
    {
      "cells": [
        "London"
      ]
    },
    {
      "cells": [
        "Melbourne"
      ]
    }
  ]
});
formatter.scenario({
  "name": "To validate booking flow of room",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user should be on login page",
  "keyword": "Given "
});
formatter.match({
  "location": "Flow.user_should_be_on_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should give username and password",
  "rows": [
    {
      "cells": [
        "siva090195",
        "0IL7CE"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "Flow.user_should_give_username_and_password(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user select \"London\",hotel,room type",
  "rows": [
    {
      "cells": [
        "Hotel Creek",
        "Hotel Sunshine",
        "Hotel Hervey",
        "Hotel Cornice"
      ]
    },
    {
      "cells": [
        "Standard",
        "Double",
        "Deluxe",
        "Super Deluxe"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "Flow.user_select_hotel_room_type(String,DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "no of rooms",
  "rows": [
    {
      "cells": [
        "1 - One",
        "2 - Two",
        "3 - Three"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "Flow.no_of_rooms(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter checkin,checkout",
  "rows": [
    {
      "cells": [
        "21/04/2021"
      ]
    },
    {
      "cells": [
        "22/04/2021"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "Flow.user_enter_checkin_checkout(DataTable)"
});
formatter.result({
  "error_message": "java.io.FileNotFoundException: C:\\Users\\rider\\eclipse-workspace\\CucumberAdactNew\\excel\\New Microsoft Excel Worksheet.xlsx (The system cannot find the path specified)\r\n\tat java.base/java.io.FileInputStream.open0(Native Method)\r\n\tat java.base/java.io.FileInputStream.open(FileInputStream.java:219)\r\n\tat java.base/java.io.FileInputStream.\u003cinit\u003e(FileInputStream.java:157)\r\n\tat org.base.BaseClass.excelread(BaseClass.java:346)\r\n\tat org.step.Flow.user_enter_checkin_checkout(Flow.java:70)\r\n\tat ✽.user enter checkin,checkout(file:src/test/resources/Features/Flow.feature:11)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user enter adult, child and click",
  "rows": [
    {
      "cells": [
        "1 - One",
        "2 - Two"
      ]
    },
    {
      "cells": [
        "0 - None",
        "1 - One"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "Flow.user_enter_adult_child_and_click(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user select hotel and click continue",
  "keyword": "And "
});
formatter.match({
  "location": "Flow.user_select_hotel_and_click_continue()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enter firstname,lastname,address",
  "rows": [
    {
      "cells": [
        "firstname",
        "siva"
      ]
    },
    {
      "cells": [
        "lastname",
        "shanmugam"
      ]
    },
    {
      "cells": [
        "address",
        "495,east"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "Flow.user_enter_firstname_lastname_address(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enter card no,card type,expmonth,expyear,cvv and click book",
  "rows": [
    {
      "cells": [
        "cardno",
        "type",
        "month",
        "year",
        "cvv"
      ]
    },
    {
      "cells": [
        "1234567890123456",
        "VISA",
        "June",
        "2022",
        "786"
      ]
    },
    {
      "cells": [
        "7894561230123456",
        "VISA",
        "June",
        "2021",
        "786"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "Flow.user_enter_card_no_card_type_expmonth_expyear_cvv_and_click_book(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should be in booking confirmation page",
  "keyword": "Then "
});
formatter.match({
  "location": "Flow.user_should_be_in_booking_confirmation_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "org.openqa.selenium.NoSuchSessionException: Session ID is null. Using WebDriver after calling quit()?\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-K0SJ8NJ\u0027, ip: \u0027192.168.1.12\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.11\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:125)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:609)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:295)\r\n\tat org.base.BaseClass.screenshot(BaseClass.java:142)\r\n\tat org.step.Hook.snap(Hook.java:26)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:65)\r\n\tat cucumber.runner.HookDefinitionMatch.runStep(HookDefinitionMatch.java:16)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:65)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:50)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:50)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:50)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:146)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:144)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:65)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:174)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater$1.execute(IdeaTestRunner.java:38)\r\n\tat com.intellij.rt.execution.junit.TestsRepeater.repeat(TestsRepeater.java:11)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:35)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:232)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:55)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "To validate booking flow of room",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user should be on login page",
  "keyword": "Given "
});
formatter.match({
  "location": "Flow.user_should_be_on_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should give username and password",
  "rows": [
    {
      "cells": [
        "siva090195",
        "0IL7CE"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "Flow.user_should_give_username_and_password(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user select \"Melbourne\",hotel,room type",
  "rows": [
    {
      "cells": [
        "Hotel Creek",
        "Hotel Sunshine",
        "Hotel Hervey",
        "Hotel Cornice"
      ]
    },
    {
      "cells": [
        "Standard",
        "Double",
        "Deluxe",
        "Super Deluxe"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "Flow.user_select_hotel_room_type(String,DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "no of rooms",
  "rows": [
    {
      "cells": [
        "1 - One",
        "2 - Two",
        "3 - Three"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "Flow.no_of_rooms(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter checkin,checkout",
  "rows": [
    {
      "cells": [
        "21/04/2021"
      ]
    },
    {
      "cells": [
        "22/04/2021"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "Flow.user_enter_checkin_checkout(DataTable)"
});
formatter.result({
  "error_message": "java.io.FileNotFoundException: C:\\Users\\rider\\eclipse-workspace\\CucumberAdactNew\\excel\\New Microsoft Excel Worksheet.xlsx (The system cannot find the path specified)\r\n\tat java.base/java.io.FileInputStream.open0(Native Method)\r\n\tat java.base/java.io.FileInputStream.open(FileInputStream.java:219)\r\n\tat java.base/java.io.FileInputStream.\u003cinit\u003e(FileInputStream.java:157)\r\n\tat org.base.BaseClass.excelread(BaseClass.java:346)\r\n\tat org.step.Flow.user_enter_checkin_checkout(Flow.java:70)\r\n\tat ✽.user enter checkin,checkout(file:src/test/resources/Features/Flow.feature:11)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user enter adult, child and click",
  "rows": [
    {
      "cells": [
        "1 - One",
        "2 - Two"
      ]
    },
    {
      "cells": [
        "0 - None",
        "1 - One"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "Flow.user_enter_adult_child_and_click(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user select hotel and click continue",
  "keyword": "And "
});
formatter.match({
  "location": "Flow.user_select_hotel_and_click_continue()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enter firstname,lastname,address",
  "rows": [
    {
      "cells": [
        "firstname",
        "siva"
      ]
    },
    {
      "cells": [
        "lastname",
        "shanmugam"
      ]
    },
    {
      "cells": [
        "address",
        "495,east"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "Flow.user_enter_firstname_lastname_address(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enter card no,card type,expmonth,expyear,cvv and click book",
  "rows": [
    {
      "cells": [
        "cardno",
        "type",
        "month",
        "year",
        "cvv"
      ]
    },
    {
      "cells": [
        "1234567890123456",
        "VISA",
        "June",
        "2022",
        "786"
      ]
    },
    {
      "cells": [
        "7894561230123456",
        "VISA",
        "June",
        "2021",
        "786"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "Flow.user_enter_card_no_card_type_expmonth_expyear_cvv_and_click_book(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should be in booking confirmation page",
  "keyword": "Then "
});
formatter.match({
  "location": "Flow.user_should_be_in_booking_confirmation_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "org.openqa.selenium.NoSuchSessionException: Session ID is null. Using WebDriver after calling quit()?\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-K0SJ8NJ\u0027, ip: \u0027192.168.1.12\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.11\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:125)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:609)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:295)\r\n\tat org.base.BaseClass.screenshot(BaseClass.java:142)\r\n\tat org.step.Hook.snap(Hook.java:26)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:65)\r\n\tat cucumber.runner.HookDefinitionMatch.runStep(HookDefinitionMatch.java:16)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:65)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:50)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:50)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:50)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:146)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:144)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:65)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:174)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater$1.execute(IdeaTestRunner.java:38)\r\n\tat com.intellij.rt.execution.junit.TestsRepeater.repeat(TestsRepeater.java:11)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:35)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:232)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:55)\r\n",
  "status": "failed"
});
});