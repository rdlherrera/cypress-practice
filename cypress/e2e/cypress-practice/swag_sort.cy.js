// cypress/e2e/cypress-practice/swag_sort.cy.js
describe('Swag Labs - Product Sorting', () => {
  beforeEach(() => {
    cy.login();
    cy.url().should('include', '/inventory.html');
  });

  const getNames = () =>
    cy.get('.inventory_item_name').then(($els) => [...$els].map((el) => el.textContent.trim()));

  const getPrices = () =>
    cy.get('.inventory_item_price').then(($els) =>
      [...$els].map((el) => Number(el.textContent.replace('$', '')))
    );

  it('sorts products by Price (low to high)', () => {
    cy.get('[data-test="product_sort_container"]').select('lohi');

    // Assert numeric ascending order
    getPrices().then((prices) => {
      const sorted = [...prices].sort((a, b) => a - b);
      expect(prices, 'prices are ascending').to.deep.equal(sorted);
    });
  });

  it('sorts products by Name (Z to A)', () => {
    cy.get('[data-test="product_sort_container"]').select('za');

    // Assert string descending order (case-insensitive)
    getNames().then((names) => {
      const norm = (s) => s.toLowerCase();
      const sortedDesc = [...names].sort((a, b) => (norm(a) < norm(b) ? 1 : norm(a) > norm(b) ? -1 : 0));
      expect(names, 'names are Z→A').to.deep.equal(sortedDesc);
    });
  });
});
