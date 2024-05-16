// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import { AccountPage } from "@root/pages/account.page";
import { LoginPage } from "@root/pages/login.page";
import { ShoppingCartPage } from "@root/pages/shopping-cart.page";

const accountPage = new AccountPage();
const loginPage = new LoginPage();
const shoppingCartPage = new ShoppingCartPage();

Cypress.Commands.add('logUser', (userEmail: string, password: string) => {
    cy.session([userEmail, password], () => {
        const accountButtonName = 'My Account';
        loginPage.navigateTo();
        loginPage.logUser(userEmail, password);
        accountPage.myAccountNavButton.should('contain.text', accountButtonName);
    });
});

Cypress.Commands.add('deleteAllProducts', () => {
    const emptyCart = 'Your shopping cart is empty!'
    shoppingCartPage.navigateTo();
    shoppingCartPage.emptyCartMessage.then(message => {
        if(!message.text().includes(emptyCart)){
            shoppingCartPage.clickOnRemoveAllCartProducts();
            shoppingCartPage.emptyCartMessage.should('contain.text', emptyCart);
        }
    });
});

Cypress.Commands.add('countCartProducts', () => {
    return shoppingCartPage.tableRows.then(products => {
        return products.length;
    })
})