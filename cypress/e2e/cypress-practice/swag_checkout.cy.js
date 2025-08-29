import { InventoryPage } from './pages/InventoryPage';
import { CartPage } from './pages/CartPage';
import { CheckoutPage } from './pages/CheckoutPage';

describe('Swag Labs - Checkout Flow', () => {
  const inventory = new InventoryPage();
  const cart = new CartPage();
  const checkout = new CheckoutPage();

  beforeEach(() => {
    cy.login(); // use our custom command
  });

  it('adds a product to cart and completes checkout', () => {
    // Step 1: Add product
    inventory.addToCart('Sauce Labs Backpack'); // add product by name
    inventory.goToCart();

    // Step 2: Verify in cart
    cart.item('Sauce Labs Backpack').should('exist'); // product must be visible

    // Step 3: Checkout process
    cart.checkout();
    checkout.fillInfo('Ralph', 'Herrera', '1000');

    // Step 4: Confirm overview page loaded
    cy.url().should('include', 'checkout-step-two');
    cy.contains('.summary_total_label', 'Total').should('exist');

    // Step 5: Finish order
    checkout.finish();

    // Step 6: Verify success
    checkout.successTitle().should('have.text', 'Thank you for your order!');
  });
});
