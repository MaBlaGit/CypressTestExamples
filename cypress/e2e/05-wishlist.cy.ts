import { MainPage } from '@root/pages/main.page';
import { ProductsPage } from '@root/pages/products.page';
import { WishlistPage } from '@root/pages/wishlist.page';

describe('Wishlist feature tests', () => {

  let mainPage = new MainPage();
  let productsPage = new ProductsPage();
  let wishlistPage = new WishlistPage();

  const initialCartItems = 0;
  const searchedProduct = 'MacBook Pro';
  const productAction = 'Add to Wish List';
  const notificationToastFailure = 'You must login or create an account';
  const notificationToastSuccess = 'Success: You have added MacBook Pro';

  describe('Not logged user', () => {
    
    beforeEach(() => {
      mainPage.navigateTo();
    });

    it('shouldn\'t be able add product to wishlist', () => {
      mainPage.headerComponent.catItemTotal.should('have.text', initialCartItems);
      mainPage.headerComponent.searchProductByName(searchedProduct);
      mainPage.headerComponent.clickOnSearchButton();
      productsPage.performActionOnSelectedProduct(productAction, initialCartItems);
      productsPage.notificationToast.should('contain.text', notificationToastFailure);
    });
  });

  describe('Logged user', () => {

    beforeEach(() => {
      cy.logUser(Cypress.env("USER_EMAIL"), Cypress.env("PASSWORD"));
      cy.removeAllWishlist();
      mainPage.navigateTo();
    });

    it('should be able add product to wishlist', () => {
      mainPage.headerComponent.catItemTotal.should('have.text', initialCartItems);
      mainPage.headerComponent.searchProductByName(searchedProduct);
      mainPage.headerComponent.clickOnSearchButton();
      productsPage.performActionOnSelectedProduct(productAction, initialCartItems);
      productsPage.notificationToast.should('contain.text', notificationToastSuccess);
      productsPage.headerComponent.clickOnWishlistButton();
      wishlistPage.wishlistTable.should('contain.text', searchedProduct);
    });
  });
});