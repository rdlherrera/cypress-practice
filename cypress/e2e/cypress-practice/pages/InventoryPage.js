export class InventoryPage {
  productCard(name) {
    return cy.contains('.inventory_item', name); // find product card by name
  }

  addToCart(name) {
    return this.productCard(name)
      .find('button')
      .contains('Add to cart')
      .click(); // click the Add button inside that card
  }

  goToCart() {
    return cy.get('.shopping_cart_link').click(); // click the cart icon
  }
}
