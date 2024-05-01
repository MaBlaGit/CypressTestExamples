import { BasePage } from "./base.page";
import { HeaderPage } from '../components/header.component';

export class MainPage extends BasePage {
    url = '/';

    headerComponent: HeaderPage = new HeaderPage();

    get searchedElements() {
        return cy.get('h4[class="title"]');
    }
}