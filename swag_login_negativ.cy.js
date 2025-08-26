describe('Swag Labs - Negative Login Scenarios', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/');
  });

  it('fails with invalid username', () => {
    cy.get('[data-test="username"]').type('wrong_user');
    cy.get('[data-test="password"]').type('secret_sauce', { log: false });
    cy.get('[data-test="login-button"]').click();
    cy.get('[data-test="error"]').should('contain.text', 'Username and password do not match');
  });

  it('fails with invalid password', () => {
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('wrong_password', { log: false });
    cy.get('[data-test="login-button"]').click();
    cy.get('[data-test="error"]').should('contain.text', 'Username and password do not match');
  });

  it('fails with empty fields', () => {
    cy.get('[data-test="login-button"]').click();
    cy.get('[data-test="error"]').should('contain.text', 'Username is required');
  });
});
