export class HeaderPage {

    get mainSearch() {
        return cy.get('#main-header').get('#search');
    }

    get searchButton() {
        return cy.get('#main-header').get('#search').find('button[type="submit"]');
    }

    get myAccountButton(){
        return cy.get('ul[class*="horizontal"]').find('a[href*="route=account/account"]');
    }

    searchProductByName(productName: string) {
        this.mainSearch.type(productName);
    }

    clickOnSearchButton(){
        this.searchButton.click();
    }

    hoverMyAccountButton(){
        this.myAccountButton.realHover();
    }
}