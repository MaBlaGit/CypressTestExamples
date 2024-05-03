import { MainPage } from "@root/pages/main.page";
import { ProductsPage } from '@root/pages/products.page';
import { ShoppingCartPage } from "@root/pages/shopping-cart.page";

describe('Search and buy products as authorized user', () => {
    let mainPage: MainPage;
    let productsPage: ProductsPage;
    let shoppingCartPage: ShoppingCartPage;

    beforeEach(() => {
        cy.logUser(Cypress.env("userEmail"), Cypress.env("password"));
        mainPage = new MainPage();
        productsPage = new ProductsPage();
        shoppingCartPage = new ShoppingCartPage();
        mainPage.navigateTo();
    });

    it('should be able to buy selected product as logged user', () => {
        const product = 'iphone';
        mainPage.headerComponent.hoverMyAccountButton();
        mainPage.headerComponent.searchProductByName(product);
        mainPage.headerComponent.clickOnSearchButton();
        productsPage.addProductToCartAtPosition(0);
        productsPage.clickOnCheckoutButton();
        shoppingCartPage.findProductName('iPhone').should('have.text', 'iPhone');


    });
})