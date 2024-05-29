import { BasePage } from '@root/cypress/support/pages/base.page';

export class SuccessPage extends BasePage {
    get successMessage(){
        return cy.contains('Your order has been placed!');
    }

    get continueButton(){
        return cy.contains('a', 'Continue');
    }

    clickOnContinueButton(){
        this.continueButton.click();
    }
}