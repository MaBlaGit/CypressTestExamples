import { BasePage } from "./base.page";

export class ProductComparisonPage extends BasePage {
    url = '/index.php?route=product/compare'

    get pageHeader(){
        return cy.get('#product-compare h1')
    }

    get comparedProduct() {
        return cy.get('#content table tbody strong');
    }
}