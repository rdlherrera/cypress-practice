import { InventoryPage } from '../pages/InventoryPage';
import { CartPage } from '../pages/CartPage';

describe('Swag Labs - Cart Management', () => {
  const inventory = new InventoryPage();
  const cart = new CartPage();

  beforeEach(() => {
    cy.login(); // uses your existing login command
  });

  it('adds and removes a product from cart', () => {
    inventory.addToCart('Sauce Labs Bike Light');
    inventory.goToCart();

    cart.item('Sauce Labs Bike Light').should('exist');

    // Remove from cart
    cy.contains('.cart_item', 'Sauce Labs Bike Light')
      .find('button')
      .contains('Remove')
      .click();

    cart.item('Sauce Labs Bike Light').should('not.exist');
  });
});
