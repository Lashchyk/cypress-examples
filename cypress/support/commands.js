// login as a cypress command example
Cypress.Commands.add('loginUI', (email, password) => {
    cy.get('#email').type(email)
    cy.get('#passwd').type(password)
    cy.get('#SubmitLogin span').click()
})