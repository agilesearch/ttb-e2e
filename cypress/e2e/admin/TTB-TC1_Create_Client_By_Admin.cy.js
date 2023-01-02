describe("TTB-TC1_Create_Client_By_Admin", () => {
  beforeEach("Login as an Admin", () => {
    cy.adminlogin()
  })
  it("tests TTB-TC1_Create_Client_By_Admin", () => {
    cy.visit(`${Cypress.env('SITE_URL')}/admins/settings`)

    cy.get('.buttons > :nth-child(3)')
      .click()
    
    cy.get('input[name="name"]')
      .type(Cypress.env('TC1_CLIENT_NAME'))

    cy.get('input[name="email"]')
      .type(Cypress.env('TC1_CLIENT_EMAIL'))

    cy.get('textarea[name="description"]')
      .type(Cypress.env('TC1_CLIENT_DESC'))

    cy.contains('Choose country of residence').click();
    cy.get("#react-select-country-select-option-212 > div").click(); // option 212 = "SWEDEN"

    cy.get('form').submit()

    cy.get('.modal-actions > .btn-text > .flex').click()

  })
  afterEach("Logout", () => {
    cy.logout()
  })

});

