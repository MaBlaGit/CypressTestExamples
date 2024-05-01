export class HeaderPage {

    get mainSearch() {
        return cy.get('#main-header').get('#search');
    }

    get searchButton() {
        return cy.get('#main-header').get('#search').find('button[type="submit"]');
    }

    searchProductByName(productName: string) {
        this.mainSearch.type(productName);
    }

    clickOnSearchButton(){
        this.searchButton.click();
    }
}