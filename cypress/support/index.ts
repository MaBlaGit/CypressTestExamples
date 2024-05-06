declare global {
    namespace Cypress {
      interface Chainable {
        /**
         * Custom command to select DOM element by data-cy attribute.
         * @example cy.dataCy('greeting')
         */
        dataCy(value: string): Chainable<JQuery<HTMLElement>>
        logUser(userEmail: string, password: string): void;
        deleteAllProducts(): void;
        countCartProducts(): Chainable<number>;
      }
    }
  }

  export{}