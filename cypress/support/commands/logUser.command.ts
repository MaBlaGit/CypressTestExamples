import { LoginPage } from "@root/cypress/support/pages/login.page";

declare global {
  namespace Cypress {
    interface Chainable {
      userLogin: typeof userLogin;
    }
  }
}

const loginPage = new LoginPage();

export const userLogin = function (
  userEmail: string,
  password: string
): Cypress.Chainable<any> {
  return cy.session(
    [userEmail, password],
    () => {
      loginPage.navigateTo();
      loginPage.logUser(userEmail, password);
    },
    {
      validate: () => {
        cy.getCookie("OCSESSID").should("not.be.empty");
      },
    }
  );
};

export {};
