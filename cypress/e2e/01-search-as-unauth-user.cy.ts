import { ConfirmOrderPage } from '@root/cypress/support/pages/confirm-order.page';
import { CheckoutPage } from '@root/cypress/support/pages/checkout.page';
import { MainPage } from '@root/cypress/support/pages/main.page';
import { ProductsPage } from '@root/cypress/support/pages/products.page';
import { ShoppingCartPage } from '@root/cypress/support/pages/shopping-cart.page';
import { SuccessPage } from '@root/cypress/support/pages/success.page';
import { userBillingData } from '@root/cypress/fixtures/test-data/user-billing.data';

describe('Search products tests', { tags: '@regression' },  () => {

  let confirmOrderPage: ConfirmOrderPage;
  let checkoutPage: CheckoutPage;
  let mainPage:MainPage;
  let productsPage: ProductsPage;
  let shoppingCartPage: ShoppingCartPage;
  let successPage: SuccessPage;

  beforeEach(() => {
    confirmOrderPage = new ConfirmOrderPage();
    checkoutPage = new CheckoutPage();
    mainPage = new MainPage();
    productsPage = new ProductsPage();
    shoppingCartPage = new ShoppingCartPage();
    successPage = new SuccessPage();
    mainPage.navigateTo();
  });

  it(`should be able to search and buy product as 'guest user'`, () => {
    const shopNow = 'SHOP NOW';
    const productToBuy = 'MacBook Air';
    const productAction = 'Add to Cart';
    const logAsGuest = 'guest';
    const successText = ' Your order has been placed!';
    const resultListIndex = 0;
    const numberProductsToBuy = 1;
    const productQuantity = 1;

    mainPage.headerComponent.searchProductByName(productToBuy);
    mainPage.headerComponent.clickOnSearchButton();
    mainPage.searchedElements.each(product => {
      expect(product).to.contains(product);
    });
    productsPage.performActionOnSelectedProduct(productAction, resultListIndex);
    mainPage.headerComponent.catItemTotal.should('have.text', numberProductsToBuy);
    productsPage.clickOnViewCartButton();
    shoppingCartPage.findProductName(productToBuy).should('contain.text', productToBuy);
    shoppingCartPage.getProductQuantityByName(productToBuy).should('have.value', productQuantity);
    shoppingCartPage.clickOnCheckoutButton();
    checkoutPage.selectActionAccount(logAsGuest);
    checkoutPage.checkTermsAndConditions();
    checkoutPage.fillBillingAddress(userBillingData);
    checkoutPage.clickOnContinueButton();
    confirmOrderPage.findProductByName(productToBuy);
    confirmOrderPage.getProductQuantityByName(productToBuy).should('contain', productQuantity);
    confirmOrderPage.clickOnConfirmOrderButton();
    successPage.successMessage.should('contain.text', successText);
    successPage.clickOnContinueButton();
    mainPage.shopNowButton.should('contain.text', shopNow);
  });
});
