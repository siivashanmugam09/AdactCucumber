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
        "siva090195"
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
        "siva090195"
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
  "status": "passed"
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
  "status": "passed"
});
formatter.step({
  "name": "user select hotel and click continue",
  "keyword": "And "
});
formatter.match({
  "location": "Flow.user_select_hotel_and_click_continue()"
});
formatter.result({
  "status": "passed"
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
  "status": "passed"
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
  "status": "passed"
});
formatter.step({
  "name": "User should be in booking confirmation page",
  "keyword": "Then "
});
formatter.match({
  "location": "Flow.user_should_be_in_booking_confirmation_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
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
        "siva090195"
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
  "status": "passed"
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
  "status": "passed"
});
formatter.step({
  "name": "user select hotel and click continue",
  "keyword": "And "
});
formatter.match({
  "location": "Flow.user_select_hotel_and_click_continue()"
});
formatter.result({
  "status": "passed"
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
  "status": "passed"
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
  "status": "passed"
});
formatter.step({
  "name": "User should be in booking confirmation page",
  "keyword": "Then "
});
formatter.match({
  "location": "Flow.user_should_be_in_booking_confirmation_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});