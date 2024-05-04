import { BasePage } from '@root/pages/base.page';

export class CheckoutPage extends BasePage {
    url = '/index.php?route=checkout/checkout';

    get firstNameInput(){
        return cy.get('#input-payment-firstname');
    }

    get lastNameInput(){
        return cy.get('#input-payment-lastname');
    }

    get addressInput(){
        return cy.get('#input-payment-address-1');
    }

    get cityInput(){
        return cy.get('#input-payment-city');
    }

    get postalCodeInput(){
        return cy.get('#input-payment-postcode');
    }

    get checkoutDetailsTable(){
        return cy.get('#checkout-cart');
    }

    get termsAndConditionsCheckbox(){
        return cy.get('label[for="input-agree"]');
    }

    get continueButton(){
        return cy.get('button#button-save');
    }

    findProductByName(productName: string) {
        return this.checkoutDetailsTable.contains(productName);
    }

    getProductQuantityByName(productName: string) {
        return this.checkoutDetailsTable.contains(productName)
                                        .parent()
                                        .parent()
                                        .find('input[id*="quantity"]');
    }

    fillBillingAddress(firstName: string, 
        lastName: string, 
        address: string, 
        city: string, 
        postCode: string){
            this.firstNameInput.type(firstName);
            this.lastNameInput.type(lastName);
            this.addressInput.type(address);
            this.cityInput.type(city);
            this.postalCodeInput.type(postCode);
    }

    checkTermsAndConditions(){
        this.termsAndConditionsCheckbox.click();
    }

    clickOnContinueButton(){
        this.continueButton.click();
    }
}
