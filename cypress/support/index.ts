declare global {
    namespace Cypress {
      interface Chainable {
        logUser(userEmail: string, password: string): void;
        deleteAllProducts(): void;
        countCartProducts(): Chainable<number>;
        removeAllWishlist(): void;
      }
    }
  }

  export{}
