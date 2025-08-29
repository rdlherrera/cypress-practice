describe('Swag Labs Login', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/');
  });

  it('should login successfully with standard_user', () => {
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('[data-test="login-button"]').click();

    // Assertion: should see Products page
    cy.url().should('include', '/inventory.html');
    cy.get('.title').should('have.text', 'Products');
  });

  it('should show error with locked_out_user', () => {
    cy.get('[data-test="username"]').type('locked_out_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('[data-test="login-button"]').click();

    // Assertion: error message should appear
    cy.get('[data-test="error"]').should('contain', 'Sorry, this user has been locked out.');
  });
});