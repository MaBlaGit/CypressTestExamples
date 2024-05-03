import { BasePage } from "@root/pages/base.page";

export class ShoppingCartPage extends BasePage {
    url = '/index.php?route=checkout/cart';

    get productDetailsTable() {
        return cy.get('.table-responsive .table-bordered');
    }

    findProductName(productName: string) {
        return this.productDetailsTable.contains(productName);
    }
}