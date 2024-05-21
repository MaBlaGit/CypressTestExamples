export class HeaderPage {

    get catItemTotal(){
        return cy.get('[data-toggle="sticky"] .cart-item-total');
    }

    get mainSearch() {
        return cy.get('#main-header').get('#search');
    }

    get searchButton() {
        return cy.get('#main-header').get('#search').find('button[type="submit"]');
    }

    get shopByCategory() {
        return cy.get('#main-navigation div[class*="shop-by-category"] a');
    }

    get navCategories(){
        return cy.get('div[data-position="left"] ul[class="navbar-nav vertical"]');
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

    clickOnShopByCategory(){
        this.shopByCategory.click();
    }

    selectCategory(categoryName: string) {
        this.navCategories.contains(categoryName).click()
    }
}