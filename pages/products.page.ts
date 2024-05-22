import { BasePage } from '@root/pages/base.page';
import { HeaderPage } from '@root/components/header.component';

export class ProductsPage extends BasePage {
    url = '/index.php?route=product%2Fsearch&search=';

    headerComponent: HeaderPage = new HeaderPage();

    get productPageHeader(){
        return cy.get('div[class*="entry-content"] h1');
    }

    get productsList() {
        return cy.get('div[data-view_id="grid"]').find('div[class="product-thumb"]');
    }

    get addToCartOnHover(){
        return cy.get('.product-action').find('button[title="Add to Cart"]');
    }

    get productComparison(){
        return cy.get('.product-action').find('button[title="Compare this Product"]');
    }

    addProductToCartAtPosition(positionIndex: number) {
        this.productsList.eq(positionIndex).realHover().then(() => {
            this.addToCartOnHover.eq(positionIndex).click();
        });
    }

    addProductToCompareAtPosition(positionIndex: number) {
        this.productsList.eq(positionIndex).realHover().then(() => {
            this.productComparison.eq(positionIndex).click();
        });
    }
}