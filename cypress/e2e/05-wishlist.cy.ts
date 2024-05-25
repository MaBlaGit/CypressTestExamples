import { MainPage } from '@root/pages/main.page';
import { ProductsPage } from '@root/pages/products.page';

describe('Wishlist feature tests', () => {

  let mainPage:MainPage;
  let productsPage: ProductsPage;

  beforeEach(() => {
    mainPage = new MainPage();
    productsPage = new ProductsPage();
    mainPage.navigateTo();
  });

  it(`should be able add products to the wishlist`, () => {
    // TODO
  });
});
