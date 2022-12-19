describe('Unknown user', () => {
  Cypress.config('defaultCommandTimeout', 10000);
  
  it('Should redirect unauthenticated user to login page', () => {
    cy.visit(`${Cypress.env('SITE_URL')}/clients/dashboard`)
    cy.location().should((location) => {
      expect(location.pathname).to.eq('/login')
    })
  })
})
