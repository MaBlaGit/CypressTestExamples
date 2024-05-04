import { BasePage } from '@root/pages/base.page';

export class ShoppingCartPage extends BasePage {
    url = '/index.php?route=checkout/cart';

    get productDetailsTable() {
        return cy.get('.table-responsive .table-bordered');
    }

    get removeProductsButton() {
        return cy.get('button[title="Remove"');
    }

    get emptyCartMessage() {
        return cy.get('#content');
    }

    get cartButton() {
        return cy.get('.buttons a[href*="/checkout"]');
    }

    get checkoutButton() {
        return cy.get('.buttons a[href*="/checkout"]');
    }

    findProductName(productName: string) {
        return this.productDetailsTable.contains(productName);
    }

    clickOnRemoveAllCartProducts() {
        this.removeProductsButton.click();
    }

    getProductQuantityByName(productName: string) {
        return this.productDetailsTable.contains(productName)
                                        .parent()
                                        .parent()
                                        .find('input[name*="quantity"]');
    }

    clickOnCheckoutButton() {
        this.checkoutButton.click();
    }
}