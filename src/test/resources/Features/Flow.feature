Feature: To validate flow of booking
Scenario Outline: To validate booking flow of room
Given user should be on login page
When user should give username and password
|siva090195|siva090195|
And user select "<location>",hotel,room type
|Hotel Creek|Hotel Sunshine|Hotel Hervey|Hotel Cornice|
|Standard|Double|Deluxe|Super Deluxe|
And no of rooms
|1 - One|2 - Two|3 - Three|
And user enter checkin,checkout
|21/04/2021|
|22/04/2021|
And user enter adult, child and click
|1 - One|2 - Two|
|0 - None|1 - One|

And user select hotel and click continue

And user enter firstname,lastname,address
|firstname|siva|
|lastname|shanmugam|
|address|495,east|

And user enter card no,card type,expmonth,expyear,cvv and click book
|cardno|type|month|year|cvv|
|1234567890123456|VISA|June|2022|786|
|7894561230123456|VISA|June|2021|786|


Then User should be in booking confirmation page
Examples:
|location|
|London|
|Melbourne|
