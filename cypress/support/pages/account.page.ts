import { BasePage } from '@root/cypress/support/pages/base.page';
import { HeaderComponent } from '@root/cypress/support/components/header.component';

export class AccountPage extends BasePage {

    url = '/index.php?route=account/account'

    headerComponent: HeaderComponent = new HeaderComponent();

    get myAccountNavButton() {
        return cy.get('#column-right a[href*="account/account"]');
    }
}