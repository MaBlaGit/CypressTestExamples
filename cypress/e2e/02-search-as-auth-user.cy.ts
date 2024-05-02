import { MainPage } from "@root/pages/main.page";

describe('Search and buy products as authorized user', () => {
    let mainPage: MainPage;

    beforeEach(() => {
        cy.logUser(Cypress.env("userEmail"), Cypress.env("password"));
        mainPage = new MainPage();
        mainPage.navigateTo();
    });

    it('should be able to buy selected product as logged user', () => {
        mainPage.headerComponent.hoverMyAccountButton();
    });
})