import { CheckoutPage } from '@root/pages/checkout.page';
import { ConfirmOrderPage } from '@root/pages/confirm-order.page';
import { MainPage } from '@root/pages/main.page';
import { ProductsPage } from '@root/pages/products.page';
import { ShoppingCartPage } from '@root/pages/shopping-cart.page';
import { SuccessPage } from '@root/pages/success.page';
import { products } from '@root/cypress/fixtures/test-data/products.data';


describe('Search and buy products as authorized user', () => {
    const shopNow = 'SHOP NOW';
    const searchedProduct = 'HTC Touch HD';
    const resultListIndex = 0;
    const productQuantity = 1;
    const initialCartItems = 0;

    const successText = 'Your order has been placed!';
    
    let checkoutPage: CheckoutPage;
    let confirmOrderPage: ConfirmOrderPage;
    let mainPage: MainPage;
    let productsPage: ProductsPage;
    let shoppingCartPage: ShoppingCartPage;
    let successPage: SuccessPage;

    beforeEach(() => {
        checkoutPage = new CheckoutPage();
        confirmOrderPage = new ConfirmOrderPage();
        mainPage = new MainPage();
        productsPage = new ProductsPage();
        shoppingCartPage = new ShoppingCartPage();
        successPage = new SuccessPage();

        cy.logUser(Cypress.env("USER_EMAIL"), Cypress.env("PASSWORD"));
        cy.deleteAllProducts();
        mainPage.navigateTo();
    });

    it('should be able to buy selected product', () => {
        const numberProductsToBuy = 1;

        mainPage.headerComponent.catItemTotal.should('have.text', initialCartItems);
        mainPage.headerComponent.hoverMyAccountButton();
        mainPage.headerComponent.searchProductByName(searchedProduct);
        mainPage.headerComponent.clickOnSearchButton();
        productsPage.addProductToCartAtPosition(resultListIndex);
        mainPage.headerComponent.catItemTotal.should('have.text', numberProductsToBuy);
        productsPage.clickOnViewCartButton();
        shoppingCartPage.findProductName(searchedProduct).should('contain.text', searchedProduct);
        shoppingCartPage.getProductQuantityByName(searchedProduct).should('have.value', productQuantity);
        shoppingCartPage.clickOnCheckoutButton();
        checkoutPage.findProductByName(searchedProduct).should('contain.text', searchedProduct);
        checkoutPage.getProductQuantityByName(searchedProduct).should('have.value', productQuantity);
        checkoutPage.checkTermsAndConditions();
        checkoutPage.clickOnContinueButton();
        confirmOrderPage.findProductByName(searchedProduct);
        confirmOrderPage.getProductQuantityByName(searchedProduct).should('contain', productQuantity);
        confirmOrderPage.clickOnConfirmOrderButton();
        successPage.successMessage.should('contain.text', successText);
        successPage.clickOnContinueButton();
        mainPage.shopNowButton.should('contain.text', shopNow);
    });

    it('should be able to buy more than one product', () => {
        const productsInTheCart = products.length;
    
        mainPage.headerComponent.catItemTotal.should('have.text', initialCartItems);
        for( const product of products) {
            mainPage.headerComponent.hoverMyAccountButton();
            mainPage.headerComponent.searchProductByName(product.name);
            mainPage.headerComponent.clickOnSearchButton();
            productsPage.addProductToCartAtPosition(resultListIndex);
            mainPage.headerComponent.catItemTotal.should('have.text', product.inCartAfter);
            productsPage.clickOnViewCartButton();
            shoppingCartPage.findProductName(product.name).should('contain.text', product.name);
            shoppingCartPage.getProductQuantityByName(product.name).should('have.value', productQuantity);
            cy.countCartProducts().then(cartProducts => {
                cartProducts === productsInTheCart ? 
                    shoppingCartPage.clickOnCheckoutButton() : shoppingCartPage.clickOnContinueShoppingButton();
            });
        }
        checkoutPage.assertCheckoutPageProducts(products, productQuantity);
        checkoutPage.checkTermsAndConditions();
        checkoutPage.clickOnContinueButton();
        confirmOrderPage.assertConfirmationOrderPageProducts(products, productQuantity);
        confirmOrderPage.clickOnConfirmOrderButton();
        successPage.successMessage.should('contain.text', successText);
        successPage.clickOnContinueButton();
        mainPage.shopNowButton.should('contain.text', shopNow);
    });
});