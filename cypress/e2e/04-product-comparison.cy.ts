import { MainPage } from '@root/cypress/support/pages/main.page';
import { ProductsPage } from '@root/cypress/support/pages/products.page';
import { ProductComparisonPage } from '@root/cypress/support/pages/product-comparison.page';

describe('Compare products test', () => {

  let mainPage:MainPage;
  let productsPage: ProductsPage;
  let productComparisonPage: ProductComparisonPage

  beforeEach(() => {
    mainPage = new MainPage();
    productsPage = new ProductsPage();
    productComparisonPage = new ProductComparisonPage();
    mainPage.navigateTo();
  });

  it(`should be able to compare two products`, () => {
    const productToCompare = 'MacBook Pro';
    const comparisonPageHeader = 'Product Comparison';
    const productAction = 'Compare this Product';
    const firstProductIndex = 0;
    const secondProductIndex = 1;

    mainPage.headerComponent.searchProductByName(productToCompare);
    mainPage.headerComponent.clickOnSearchButton();
    mainPage.searchedElements.each(product => {
      expect(product).to.contains(product);
    });
    productsPage.performActionOnSelectedProduct(productAction, firstProductIndex);
    productsPage.performActionOnSelectedProduct(productAction, secondProductIndex);
    productsPage.headerComponent.clickOnCompareButton();
    productComparisonPage.pageHeader.should('have.text', comparisonPageHeader);
    productComparisonPage.comparedProduct.should('have.length', 2);
  });
});
