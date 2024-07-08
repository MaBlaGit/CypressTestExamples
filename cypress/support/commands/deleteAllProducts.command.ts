import { ShoppingCartPage } from "@root/cypress/support/pages/shopping-cart.page";

declare global {
  namespace Cypress {
    interface Chainable {
      deleteAllProducts: typeof deleteAllProducts;
    }
  }
}

const shoppingCartPage = new ShoppingCartPage();

export const deleteAllProducts = function () {
  const emptyCart = "Your shopping cart is empty!";
  shoppingCartPage.navigateTo();
  shoppingCartPage.emptyCartMessage.then((message) => {
    if (!message.text().includes(emptyCart)) {
      shoppingCartPage.clickOnRemoveAllCartProducts();
      shoppingCartPage.emptyCartMessage.should("contain.text", emptyCart);
    }
  });
};

export {};
