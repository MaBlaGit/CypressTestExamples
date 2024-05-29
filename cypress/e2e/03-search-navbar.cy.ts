import { MainPage } from '@root/cypress/support/pages/main.page';
import { ProductsPage } from '@root/cypress/support/pages/products.page';
import { navigationCategories } from '@root/cypress/fixtures/test-data/products.data';

describe('Navbar product search tests', () => {
    let mainPage: MainPage;
    let productsPage: ProductsPage;

    beforeEach(() => {
        mainPage = new MainPage();
        productsPage = new ProductsPage();

        cy.logUser(Cypress.env("USER_EMAIL"), Cypress.env("PASSWORD"));
        cy.deleteAllProducts();
        mainPage.navigateTo();
    });

    for(const category of navigationCategories) {
        it(`should be able navigate to ${category} category`, () => {
            mainPage.headerComponent.clickOnShopByCategory();
            mainPage.headerComponent.selectCategory(category);
            productsPage.productPageHeader.should('contain', category);
        });
    }
});