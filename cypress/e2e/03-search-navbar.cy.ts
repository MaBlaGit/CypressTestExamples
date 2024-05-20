import { MainPage } from '@root/pages/main.page';



describe('Navbar product search tests', () => {
    let mainPage: MainPage;

    beforeEach(() => {
        mainPage = new MainPage();

        cy.logUser(Cypress.env("userEmail"), Cypress.env("password"));
        cy.deleteAllProducts();
        mainPage.navigateTo();
    });

    it('should be able to search product by using navbar', () => {
        mainPage.headerComponent.clickOnShopByCategory();
    });
});