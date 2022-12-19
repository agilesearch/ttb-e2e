
describe('Admin user', () => {
    it('should open dashboard page for admin user', () => {
        cy.visit(`${Cypress.env('SITE_URL')}/login`)
        cy.get('input[name="username"]')
        .type(Cypress.env('ADMIN_LOGIN'))

        cy.get('input[name="password"]')
        .type(Cypress.env('ADMIN_PASSWORD'))

        cy.get('button[type="submit"]')
        .click()

        cy.location().should((location) => {
            expect(location.pathname).to.eq('/admins/dashboard')
        })

        cy.get('table[role="table"]') // make names more specific
            .should('be.visible')
    })
})