Feature: Product category page

Scenario: As a user, I can log and get 10 products

    Given The user is on this category page 
    When No further options are clicked 
    Then Ten products should be displayed

Scenario: As a user, I can log and get 25 products

    Given User is on this category page 
    When The user changes ‘Rows per page:’ to 25 (pagination) 
    Then 25 products should be displayed

Scenario: As a user, I can get 25 Out Of Stock products

    Given User is on this category page
    When The user changes ‘Rows per page’ to 25 (pagination) 
    And User has clicked ‘Show Out of Stock’ 
    Then Check there is at least one product that show ‘OUT OF STOCK’ in the results

Scenario: As a user, I can log and get LowToHigh products

    Given User is on this category page 
    When The user selects ‘Sort By:’ - ‘Price Low to High’ 
    Then 10 products should be displayed in order of price (low to high)
