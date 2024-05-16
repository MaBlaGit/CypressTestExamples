import { BasePage } from '@root/pages/base.page';
import { HeaderPage } from '@root/components/header.component';

export class AccountPage extends BasePage {

    url = '/index.php?route=account/account'

    headerComponent: HeaderPage = new HeaderPage();

    get myAccountNavButton() {
        return cy.get('#column-right a[href*="account/account"]');
    }
}