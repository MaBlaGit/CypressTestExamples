import { BasePage } from '@root/pages/base.page';
import { HeaderComponent } from '@root/components/header.component';

export class LoginPage extends BasePage {
    url = '/index.php?route=account/login';

    headerComponent: HeaderComponent = new HeaderComponent();

    get emailAddressInput() {
        return cy.get('#input-email');
    }

    get passwordInput() {
        return cy.get('#input-password');
    }

    get loginButton(){
        return cy.get('input[value="Login"]');
    }

    logUser(userEmail: string, password: string) {
        this.emailAddressInput.type(userEmail);
        this.passwordInput.type(password);
        this.loginButton.click();
    }
}