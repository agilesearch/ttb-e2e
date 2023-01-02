/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
Cypress.Commands.add("adminlogin", () => { 
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

Cypress.Commands.add("clientlogin", () => {
    cy.visit(`${Cypress.env('SITE_URL')}/login`)
    cy.get('input[name="username"]')
        .type(Cypress.env('CLIENT_LOGIN'))

    cy.get('input[name="password"]')
        .type(Cypress.env('CLIENT_PASSWORD'))

    cy.get('button[type="submit"]')
        .click()

    cy.get('table[role="table"]') // make names more specific
        .should('be.visible')
})

Cypress.Commands.add("userlogin", () => {
    cy.visit(`${Cypress.env('SITE_URL')}/login`)
    cy.get('input[name="username"]')
        .type(Cypress.env('USER_LOGIN'))

    cy.get('input[name="password"]')
        .type(Cypress.env('USER_PASSWORD'))

    cy.get('button[type="submit"]')
        .click()

    cy.get('table[role="table"]') // make names more specific
        .should('be.visible')
})

Cypress.Commands.add("logout", () => {
    cy.get(':nth-child(3) > .btn-icon-label > .las')
        .click()

    cy.get('.modal-actions > .btn-contained > .flex')
        .click()
})

//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }