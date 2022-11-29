# Cypress Example Project using page objects

Basic Cypress example project with using page objects for testing demo webpage - http://automationpractice.com/

## Example tests

### Search functionality
**Test Scenario 1.1:**

As a user I would like to search for a product `Summer dress` and be able to see results for it

```
When I search for a Product: "Summer dress"
Then some items are found
```

**Test Scenario 1.2:**

As a user I would like to search for a product `Cocktail dress` and there shouldn't be any results for it

```
When I search for a Product: "Cocktail dress"
No items were found
```

### Filter functionality
**Test Scenario 2:** 

As a user I would like to filter for particular product and be able to see results for it

``` 
When I filter for category: "Evening dress" with size: "S" and color: "Pink"
Then some items are found
```

### Shopping flow
**Test scenario 3.1:** 

As a logged in user I would like to purchase a product

**Preconditions:** 

created static user is used for scenario 3.1

```
Given User is logged in
When I search for a product adn add it to the card
Then Product is in the card
And I proceed to checkout (up to the payment tab)
```

**Test scenario 3.2:** 

As a user I would like to purchase a product

```
When I search for a product adn add it to the card
Then Product is in the card
And I proceed to checkout
And I log in
And I proceed to checkout (up to the payment tab)
```

### Run tests:
- Install Cypress: `npm install cypress --save-dev`
- Add your credentials to log in inside `cypress.config.js`
- Run the tests:
  - Chrome `cypress run --browser chrome`
  - Firefox `cypress run --browser firefox`
