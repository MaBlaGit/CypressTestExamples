import { BasePage } from '@root/cypress/support/pages/base.page';
import { Product } from '@root/cypress/support/typings/typings';
import { UserBilling } from '@root/cypress/support/interfaces/interfaces';

export class CheckoutPage extends BasePage {
    url = '/index.php?route=checkout/checkout';

    get loginRadio(){
        return cy.get('input#input-account-login ~label');
    }

    get registerAccountRadio(){
        return cy.get('input#input-account-register ~label');
    }

    get guestCheckoutRadio() {
        return cy.get('input#input-account-guest ~label');
    }

    get firstNameInput(){
        return cy.get('#input-payment-firstname');
    }

    get lastNameInput(){
        return cy.get('#input-payment-lastname');
    }

    get emailAddressInput(){
        return cy.get('input#input-payment-email');
    }

    get telephoneInput(){
        return cy.get('input[name="telephone"]');
    }

    get billingAddressInput(){
        return cy.get('input[name="address_1"]');
    }

    get billingCityInput(){
        return cy.get('input#input-payment-city');
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

    selectActionAccount(action: 'login' | 'register'| 'guest') {
        switch(action) {
            case 'login':
                this.loginRadio.click();
                break;
            case 'register':
                this.registerAccountRadio.click();
                break;
            case 'guest':
                this.guestCheckoutRadio.click();
                break;
        }
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

    assertCheckoutPageProducts(listOfProducts: Product[], productQuantity: number) {
        listOfProducts.forEach(product => {
          this.findProductByName(product.name).should('contain', product.name);
          this.getProductQuantityByName(product.name).should('have.value', productQuantity);
        });
      }

    fillBillingAddress(userBillingData: UserBilling){
        const { firstName, lastName, email, telephone, address, city, postCode } = userBillingData;
            this.firstNameInput.type(firstName);
            this.lastNameInput.type(lastName);
            this.emailAddressInput.type(email);
            this.telephoneInput.type(telephone);
            this.addressInput.type(address);
            this.cityInput.type(city);
            this.postalCodeInput.type(postCode);
    }

    checkTermsAndConditions(){
        this.termsAndConditionsCheckbox.click();
    }

    clickOnContinueButton(){
        this.continueButton.invoke('click');
    }
}
