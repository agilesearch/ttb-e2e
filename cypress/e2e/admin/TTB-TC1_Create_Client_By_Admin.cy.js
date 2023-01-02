describe("TTB-TC1_Create_Client_By_Admin", () => {
  beforeEach("Login as an Admin", () => {
    cy.visit(`${Cypress.env('SITE_URL')}/login`)
    cy.get('input[name="username"]')
      .type(Cypress.env('ADMIN_LOGIN'))

    cy.get('input[name="password"]')
      .type(Cypress.env('ADMIN_PASSWORD'))

    cy.get('button[type="submit"]')
      .click()

    cy.get('table[role="table"]') // make names more specific
      .should('be.visible')
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
    cy.get(':nth-child(3) > .btn-icon-label > .las')
    .click()

    cy.get('.modal-actions > .btn-contained > .flex')
    .click()
  })

});

