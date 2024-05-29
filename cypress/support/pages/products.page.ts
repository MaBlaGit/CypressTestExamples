import { BasePage } from '@root/cypress/support/pages/base.page';
import { HeaderComponent } from '@root/cypress/support/components/header.component';
import { ProductAction } from '@root/cypress/support/typings/typings';

export class ProductsPage extends BasePage {
    url = '/index.php?route=product%2Fsearch&search=';

    headerComponent: HeaderComponent = new HeaderComponent();

    get productPageHeader(){
        return cy.get('div[class*="entry-content"] h1');
    }

    get productsList() {
        return cy.get('div[data-view_id="grid"]').find('div[class="product-thumb"]');
    }

    performActionOnSelectedProduct(productAction: ProductAction, positionIndex: number) {
        this.productsList.eq(positionIndex).realHover().then(() => {
            cy.get('.product-action')
              .find(`button[title="${productAction}"]`)
              .eq(positionIndex).click();
        });
    }
}