import { BasePage } from '@root/pages/base.page';
import { HeaderPage } from '@root/components/header.component';

export class MainPage extends BasePage {
    url = '/';

    headerComponent: HeaderPage = new HeaderPage();

    get shopNowButton(){
        return cy.contains('SHOP NOW');
    }

    get searchedElements() {
        return cy.get('h4[class="title"]');
    }
}