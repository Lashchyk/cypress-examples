export class ShoppingCardPage {

    constructor() {
        this.cartTitle = '#cart_title'
        this.cartContains = '#summary_products_quantity'
        this.shoppingHeader = '#center_column h1'
        this.shippingHeading = '#carrier_area h1'
        this.tAndC = '#cgv'
        this.proceedToCheckoutButton = '#center_column p.cart_navigation.clearfix a.button.btn.btn-default.standard-checkout.button-medium'
    }

    getShoppingCartTitle() {
        cy.get(this.cartTitle).contains('Shopping-cart summary').should('be.visible');
    }

    getShoppingCartContains(contains) {
        cy.get(this.cartContains).contains(contains).should('be.visible');
    }

    getAddressTab() {
        cy.get(this.shoppingHeader).contains('Addresses').should('be.visible');
    }

    getShippingTab() {
        cy.get(this.shippingHeading).contains('Shipping').should('be.visible');
    }

    selectTandC() {
        cy.get(this.tAndC).should('be.visible').click();
    }

    getPaymentTab() {
        cy.get(this.shoppingHeader).contains('Please choose your payment method').should('be.visible');
    }

    proceedToCheckout() {
        cy.get(this.proceedToCheckoutButton).should('be.visible').click();
    }
}

export default new ShoppingCardPage