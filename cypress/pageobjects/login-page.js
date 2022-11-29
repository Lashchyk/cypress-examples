export class LoginPage {

    constructor() {
        this.loginEmailField = '#email';
        this.loginPasswordField = '#passwd';
        this.signInButton = '#SubmitLogin span';
    }

    login(email, password) {
        cy.get(this.loginEmailField, {timeout: 10000}).should('be.visible').type(email)
        cy.get(this.loginPasswordField, {timeout: 10000}).should('be.visible').type(password)
        cy.get(this.signInButton).should('be.visible').click();
    }
}

export default new LoginPage