import { CheckoutPage } from '@root/pages/checkout.page';
import { MainPage } from '@root/pages/main.page';
import { ProductsPage } from '@root/pages/products.page';
import { ShoppingCartPage } from '@root/pages/shopping-cart.page';
import { userBillingData } from '../fixtures/test-data/user-billing.data';

describe('Search products tests', () => {

  let checkoutPage: CheckoutPage;
  let mainPage:MainPage;
  let productsPage: ProductsPage;
  let shoppingCartPage: ShoppingCartPage;

  beforeEach(() => {
    checkoutPage = new CheckoutPage();
    mainPage = new MainPage();
    productsPage = new ProductsPage();
    shoppingCartPage = new ShoppingCartPage();
    mainPage.navigateTo();
  });

  it(`should be able to search and buy product as 'guest user'`, () => {
    const productToBuy = 'MacBook Pro';
    const resultListIndex = 0;
    const numberProductsToBuy = 1;
    const productQuantity = 1;
    const logAsGuest = 'guest';

    mainPage.headerComponent.searchProductByName(productToBuy);
    mainPage.headerComponent.clickOnSearchButton();
    mainPage.searchedElements.each(product => {
      expect(product).to.contains(product);
    });
    productsPage.addProductToCartAtPosition(resultListIndex);
    mainPage.headerComponent.catItemTotal.should('have.text', numberProductsToBuy);
    productsPage.clickOnViewCartButton();
    shoppingCartPage.findProductName(productToBuy).should('contain.text', productToBuy);
    shoppingCartPage.getProductQuantityByName(productToBuy).should('have.value', productQuantity);
    shoppingCartPage.clickOnCheckoutButton();
    checkoutPage.selectActionAccount(logAsGuest);
    checkoutPage.checkTermsAndConditions();
    checkoutPage.fillBillingAddress(userBillingData);
    checkoutPage.clickOnContinueButton();
  });
});
