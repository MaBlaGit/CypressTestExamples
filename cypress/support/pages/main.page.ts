import { BasePage } from '@root/cypress/support/pages/base.page';
import { HeaderComponent } from '@root//cypress/support/components/header.component';

export class MainPage extends BasePage {
    url = '/';

    headerComponent: HeaderComponent = new HeaderComponent();

    get shopNowButton(){
        return cy.contains('SHOP NOW');
    }

    get searchedElements() {
        return cy.get('h4[class="title"]');
    }
}