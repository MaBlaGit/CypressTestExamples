import { MainPage } from '@root/pages/main.page';
import { ProductsPage } from '@root/pages/products.page';
import { navigationCategories } from '@root/cypress/fixtures/test-data/products.data';

describe('Navbar product search tests', () => {
    let mainPage: MainPage;
    let productsPage: ProductsPage;

    beforeEach(() => {
        mainPage = new MainPage();
        productsPage = new ProductsPage();

        cy.logUser(Cypress.env("userEmail"), Cypress.env("password"));
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