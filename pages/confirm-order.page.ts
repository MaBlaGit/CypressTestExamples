import { BasePage } from '@root/pages/base.page';

export class ConfirmOrderPage extends BasePage {
    url = '/index.php?route=extension/maza/checkout/confirm';

    get productOrderTable(){
        return cy.get('#content');
    }

    get confirmOrderButton(){
        return cy.get('button#button-confirm');
    }

    findProductsByName(productName: string) {
        return this.productOrderTable.contains(productName);
    }

    getProductQuantityByName(productName: string) {
        return this.productOrderTable.contains(productName).next().next();
    }

    clickOnConfirmOrderButton(){
        this.confirmOrderButton.click();
    }
}