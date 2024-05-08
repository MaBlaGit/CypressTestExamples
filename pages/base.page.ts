import { CheckoutPage } from "./checkout.page";
import { ConfirmOrderPage } from "./confirm-order.page";

export class BasePage {
    protected url = '';

    get toastBodyViewCartButton(){
        return cy.get('.toast-body').contains('View Cart');
    }

    get toastBodyCheckoutButton(){
        return cy.get('.toast-body').contains('Checkout');
    }

    navigateTo() {
        return cy.visit(this.url);
    }

    clickOnViewCartButton(){
        this.toastBodyViewCartButton.click();
    }

    clickOnCheckoutButton(){
        this.toastBodyCheckoutButton.click();
    }
}