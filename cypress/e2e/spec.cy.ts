// cypress/integration/app.spec.js
describe('E2E Test for React App', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('click all links', () => {
    // categories page
    cy.contains('categories').click({ force: true });
    cy.location('pathname').should('eq', '/categories/all');
    cy.go('back');

    // home page
    cy.get('.logo-img').click({ force: true });
    cy.location('pathname').should('eq', '/');

    // product page
    cy.contains('product').click({ force: true });
    cy.location('pathname').should('eq', '/categories/product/15');
    cy.go('back');
  });

  it('should add items to the cart', () => {
    // Click on the "Categories" link
    cy.contains('categories').click({ force: true }); // Using force to click even if not visible
    cy.wait(1000); // Wait for content to load

    // Click on the category "kitchen"
    cy.contains('kitchen').click({ force: true });

    // Click on one or more products
    cy.get('.product').click();

    // Click on "add to cart" button
    cy.contains('add to cart').click({ force: true });
  });
});
