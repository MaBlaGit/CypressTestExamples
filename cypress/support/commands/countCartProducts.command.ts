import { ShoppingCartPage } from "@root/cypress/support/pages/shopping-cart.page";

declare global {
  namespace Cypress {
    interface Chainable {
      countCartProducts: typeof countCartProducts;
    }
  }
}

const shoppingCartPage = new ShoppingCartPage();

export const countCartProducts = function (): Cypress.Chainable<number> {
  return shoppingCartPage.tableRows.then((products) => {
    return products.length;
  });
};

export {};
