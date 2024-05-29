import { BasePage } from '@root/cypress/support/pages/base.page';

export class ShoppingCartPage extends BasePage {
    url = '/index.php?route=checkout/cart';

    get tableRows() {
        return cy.get('.table-responsive .table-bordered tbody tr');
    }

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

    get continueShoppingButton() {
        return cy.get('.buttons a[href*="/home"]');
    }

    get checkoutButton() {
        return cy.get('.buttons a[href*="/checkout"]');
    }

    findProductName(productName: string) {
        return this.productDetailsTable.contains(productName);
    }

    clickOnRemoveAllCartProducts() {
        this.removeProductsButton.each(button => {
            cy.wrap(button).click();
        })
    }

    getProductQuantityByName(productName: string) {
        return this.productDetailsTable.contains(productName)
                                        .parent()
                                        .parent()
                                        .find('input[name*="quantity"]');
    }

    clickOnContinueShoppingButton(){
        this.continueShoppingButton.click();
    }

    clickOnCheckoutButton() {
        this.checkoutButton.click();
    }
}