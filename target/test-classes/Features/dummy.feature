Feature: To validate	
Scenario Outline: to do
When user should give username and password
|siva090195|siva090195|

And user select "<location>",hotel,room type,no of rooms,checkin,checkout,adult and click
|Hotel Creek|Hotel Sunshine|Hotel Hervey|Hotel Cornice|
|Standard|Double|Deluxe|Super Deluxe|
|1 - One|2 - Two|3 - Three|
|21/04/2021|
|21/05/2021|
|1 - One|2 - Two|
|0 - None|1 - One|

And user select hotel and click continue

And user enter firstname,lastname,address
|firstname|siva|
|lastname|shanmugam|

And user enter card no,card type,expmonth,expyear,cvv and click book
|cardno|type|month|year|cvv|
|1234567890123456|VISA|June|2022|786|

Then User should be in booking confirmation page
Examples:
|location|
|London|
|Melbourne|

