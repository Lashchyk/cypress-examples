export class HomePage {

    constructor() {
        this.searchField = '#search_query_top';
        this.searchedProduct = '#center_column h1 span.heading-counter';
        this.searchedProductEmpty = '#center_column p';
        this.filteredProduct = '#center_column ul';

        this.productAddedToCard = '#layer_cart';
        this.proceedToCheckoutButton = '#layer_cart';

        // tbd: to improve the selectors
        this.loginLink = '#header div.nav div div nav div.header_user_info a'
        this.logoutLink = '#header div.nav div div nav div:nth-child(2) a';

        this.menu = '#block_top_menu ul';
        this.category = '#categories_block_left div ul';
        this.size = '#ul_layered_id_attribute_group_1';
        this.color = '#ul_layered_id_attribute_group_3';
    }

    openHomePage() {
        cy.visit('/');
    }

    openLoginPage() {
        cy.get(this.loginLink).should('be.visible').click();
    }

    logout() {
        cy.get(this.logoutLink).should('be.visible').click();
    }

    searchForProduct(product) {
        cy.get(this.searchField)
            .should('be.visible').type(product + '{enter}')
    }

    addFirstProductToCard() {
        cy.get(this.filteredProduct)
            .contains('Add to cart').should('be.visible').click();
    }

    checkProductAdded() {
        // loads very slowly
        cy.get(this.productAddedToCard, {timeout: 20000})
            .contains('Product successfully added to your shopping cart')
            .should('be.visible');
    }

    proceedToCheckout() {
        cy.get(this.proceedToCheckoutButton)
            .find('a').contains('Proceed to checkout')
            .should('be.visible').click();
    }

    getProduct() {
        cy.get(this.searchedProduct).contains('results have been found')
    }

    getProductFilter() {
        cy.get(this.filteredProduct)
    }

    getProductEmpty() {
        cy.get(this.searchedProductEmpty).contains('No results were found for your search')
    }

    selectMenu(menu) {
        cy.get(this.menu).contains(menu).click({force: true});
    }

    selectCategory(category) {
        cy.get(this.category).contains(category).click({force: true});
    }

    selectSize(size) {
        cy.get(this.size).contains(size).click({force: true});
    }

    // this checkbox doesn't work on UI
    selectColor(color) {
        cy.get(this.color).contains(color).click();
    }
}

export default new HomePage