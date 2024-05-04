import { BasePage } from '@root/pages/base.page';

export class SuccessPage extends BasePage{
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