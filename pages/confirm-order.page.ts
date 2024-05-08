import { BasePage } from '@root/pages/base.page';

export class ConfirmOrderPage extends BasePage {
    static pageName = 'ConfirmOrderPage';
    url = '/index.php?route=extension/maza/checkout/confirm';

    get productOrderTable(){
        return cy.get('#content');
    }

    get confirmOrderButton(){
        return cy.get('button#button-confirm');
    }

    findProductByName(productName: string) {
        return this.productOrderTable.contains(productName);
    }

    getProductQuantityByName(productName: string) {
        return this.productOrderTable.contains(productName).next().next();
    }

    assertConfirmationOrderPageProducts(listOfProducts: string[], productQuantity: number) {
        listOfProducts.forEach(product => {
          this.findProductByName(product).should('contain', product);
          this.getProductQuantityByName(product).should('contain', productQuantity);
        });
      }

    clickOnConfirmOrderButton(){
        this.confirmOrderButton.click();
    }
}