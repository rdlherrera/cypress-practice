export class CartPage {
  item(name) {
    return cy.contains('.cart_item', name); // check if product exists in cart
  }

  checkout() {
    return cy.contains('button', 'Checkout').click(); // click checkout button
  }
}
