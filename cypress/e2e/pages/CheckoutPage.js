export class CheckoutPage {
  fillInfo(first = 'Ralph', last = 'Herrera', zip = '1000') {
    cy.get('[data-test="firstName"]').type(first);
    cy.get('[data-test="lastName"]').type(last);
    cy.get('[data-test="postalCode"]').type(zip);
    cy.get('[data-test="continue"]').click();
  }

  finish() {
    cy.get('[data-test="finish"]').click();
  }

  successTitle() {
    return cy.get('.complete-header'); // "Thank you for your order!"
  }
}
