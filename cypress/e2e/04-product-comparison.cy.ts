import { MainPage } from '@root/pages/main.page';
import { ProductsPage } from '@root/pages/products.page';

describe('Compare products test', () => {

  let mainPage:MainPage;
  let productsPage: ProductsPage;

  beforeEach(() => {
    mainPage = new MainPage();
    productsPage = new ProductsPage();
    mainPage.navigateTo();
  });

  it(`should be able to compare two products`, () => {
    const productToBuy = 'MacBook Pro';
    const firstProductIndex = 0;
    const secondProductIndex = 1;

    mainPage.headerComponent.searchProductByName(productToBuy);
    mainPage.headerComponent.clickOnSearchButton();
    mainPage.searchedElements.each(product => {
      expect(product).to.contains(product);
    });
    productsPage.addProductToCompareAtPosition(firstProductIndex);
    productsPage.addProductToCompareAtPosition(secondProductIndex);
    productsPage.headerComponent.clickOnCompareButton();
  });
});
