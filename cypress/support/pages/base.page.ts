export class BasePage {
    protected url = '';

    get notificationToast(){
        return cy.get('#notification-box-top');
    }

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