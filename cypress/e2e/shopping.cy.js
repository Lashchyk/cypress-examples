import homePage from "../pageobjects/home-page";
import loginPage from "../pageobjects/login-page";
import shoppingCardPage from "../pageobjects/shopping-card-page";

const USER_EMAIL = Cypress.env("USER_EMAIL")
const USER_PASSWORD = Cypress.env("USER_PASSWORD")

describe('Purchase product flow', () => {

    beforeEach(() => {
        homePage.openHomePage()
    })

    it('Logged In User Buys a Product', () => {

        /* Log in */
        homePage.openLoginPage()
        loginPage.login(USER_EMAIL, USER_PASSWORD)

        /* Search for a product */
        homePage.searchForProduct('Summer dress')

        /* Add first found product to card and proceed to checkout */
        homePage.addFirstProductToCard()
        homePage.checkProductAdded()
        homePage.proceedToCheckout()

        /* Shopping flow */
        shoppingCardPage.getShoppingCartTitle()
        shoppingCardPage.getShoppingCartContains('1 Product')
        shoppingCardPage.proceedToCheckout()
        shoppingCardPage.getAddressTab()
        shoppingCardPage.proceedToCheckout()
        shoppingCardPage.getShippingTab()
        shoppingCardPage.selectTandC()
        shoppingCardPage.proceedToCheckout()
        shoppingCardPage.getPaymentTab()

        /* tbd:
        proceed with payment tab to finish the order
         */
    })

    it('User Buys a product and logs in during purchasing', () => {

        /* Search for a product */
        homePage.searchForProduct('Summer dress')
        homePage.getProductEmpty()

        /* Add first found product to card and proceed to checkout */
        homePage.addFirstProductToCard()
        homePage.checkProductAdded()
        homePage.proceedToCheckout()

        /* Shopping flow */
        shoppingCardPage.getShoppingCartTitle()
        shoppingCardPage.getShoppingCartContains('1 Product')
        shoppingCardPage.proceedToCheckout()

        /* Shopping flow - Log in */
        loginPage.login(USER_EMAIL, USER_PASSWORD)

        /* Shopping flow proceed */
        shoppingCardPage.proceedToCheckout()
        shoppingCardPage.getAddressTab()
        shoppingCardPage.proceedToCheckout()
        shoppingCardPage.getShippingTab()
        shoppingCardPage.selectTandC()
        shoppingCardPage.proceedToCheckout()
        shoppingCardPage.getPaymentTab()

        /* tbd:
      proceed with payment tab to finish the order as in the previous test
       */
    })

    afterEach(() => {
        homePage.logout()
    })
})