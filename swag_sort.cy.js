describe('Swag Labs - Product Sorting', () => {
  beforeEach(() => {
    cy.login();
  });

  it('sorts products by Price (low to high)', () => {
    cy.get('[data-test="product_sort_container"]').select('Price (low to high)');

    let prices = [];
    cy.get('.inventory_item_price').each(($el) => {
      prices.push(parseFloat($el.text().replace('$', '')));
    }).then(() => {
      const sorted = [...prices].sort((a, b) => a - b);
      expect(prices).to.deep.equal(sorted);
    });
  });

  it('sorts products by Name (Z to A)', () => {
    cy.get('[data-test="product_sort_container"]').select('Name (Z to A)');

    let names = [];
    cy.get('.inventory_item_name').each(($el) => {
      names.push($el.text());
    }).then(() => {
      const sorted = [...names].sort().reverse();
      expect(names).to.deep.equal(sorted);
    });
  });
});
