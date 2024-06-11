declare global {
    namespace Cypress {
      interface Chainable {
        logUser(userEmail: string, password: string): Chainable<void>;
        deleteAllProducts(): Chainable<void>;
        countCartProducts(): Chainable<number>;
        removeAllWishlist(): Chainable<void>;
      }
    }
  }

  export{}
