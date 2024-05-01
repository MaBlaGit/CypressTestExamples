import { MainPage } from "../../pages/main.page";
import { products } from "../../test-data//products.data";

describe('Search products tests', () => {

  let mainPage:MainPage;

  beforeEach(() => {
    mainPage = new MainPage();
    mainPage.navigateTo();
  });

  for(const product of products) {
    it(`should be able to search ${product} products`, () => {
      mainPage.headerComponent.searchProductByName(product);
      mainPage.headerComponent.clickOnSearchButton();
      mainPage.searchedElements.each(product => {
        expect(product).to.contains(product);
      })
    });
  }
})