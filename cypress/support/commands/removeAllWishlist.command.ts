import { WishlistPage } from "@root/cypress/support/pages/wishlist.page";

declare global {
  namespace Cypress {
    interface Chainable {
      removeAllWishlist: typeof removeAllWishlist;
    }
  }
}

const wishlistPage = new WishlistPage();

export const removeAllWishlist = function () {
  const emptyWishlist = "No results!";
  wishlistPage.navigateTo();
  wishlistPage.emptyWishlistMessage.then((message) => {
    if (!message.text().includes(emptyWishlist)) {
      wishlistPage.removeAllElementsFromWishlist();
      wishlistPage.emptyWishlistMessage.should("contain.text", emptyWishlist);
    }
  });
};

export {};
