/// <reference types="cypress" />

const product1 = "Wakacje w Circa 39"
const product2 = "Wakacje w Alaya Ubud"

describe('Complex user flow', () => {
    beforeEach(() => {
        cy.visit('')
    })

    it('should do what is required??', () => {
        cy.get('[aria-label="Szukaj"]')
            .clear()
            .type(`${product1}{Enter}`)

        cy.get(`img[alt="${product1}"]`)
            .click()

        cy.get('#quantity_wanted')
            .click()
            .clear()
            .type('5')

        cy.get('.add-to-cart')
            .click()

        cy.contains('button', 'Kontynuuj zakupy')
            .click()

        cy.get('[aria-label="Szukaj"]')
            .clear()
            .type(`${product2}{Enter}`)

        cy.get(`img[alt="${product2}"]`)
            .click()

        cy.get('#quantity_wanted')
            .click()
            .clear()
            .type('5')

        cy.get('.add-to-cart')
            .click()

        cy.contains('a', 'Realizuj zamówienie')
            .click()

        cy.get('[data-link-action="delete-from-cart"')
            .first()
            .click()
            .should('not.exist')

        cy.get('.checkout')
            .click()

        cy.get('[name="id_gender"]')
            .first()
            .click()

        cy.get('[name="firstname"]')
            .clear()
            .type('Jan')

        cy.get('[name="lastname"]')
            .clear()
            .type('Kowalski')

        cy.get('[name="email"]')
            .first()
            .clear()
            .type(`jan.kowalski${Math.random(500000)}@example.com`)

        cy.get('[name="password"]')
            .first()
            .type('aA1!12341234')

        cy.get('[name="birthday"]')
            .clear()
            .type('1990-01-01')

        cy.get('[name="psgdpr"]')
            .click()

        cy.get('[data-link-action="register-new-customer"]')
            .click()

        cy.get('[name="address1"]')
            .clear()
            .type('Konwaliowa 100')

        cy.get('[name="postcode"]')
            .clear()
            .type('11-123')

        cy.get('[name="city"]')
            .clear()
            .type('Kocie Dolki Dolne')

        cy.get('[name="confirm-addresses"]')
            .click()

        cy.get('[name="confirmDeliveryOption"]')
            .click()

        cy.get('#payment-option-1')
            .click()

        cy.get('#conditions-to-approve')
            .find('input')
            .click()

        cy.get('#payment-confirmation')
            .click()

        cy.get('.account')
            .contains('Jan Kowalski')
            .click()

        cy.get('#history-link')
            .click()

        cy.get('[data-link-action="view-order-details"]')
            .first()
            .click()

        cy.wait(5000)
    })
})