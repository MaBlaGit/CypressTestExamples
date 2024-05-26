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

    get compareButton(){
        return cy.get('a[aria-label="Compare"]');
    }

    get wishlistButton(){
        return cy.get('div a[aria-label="Wishlist"]');
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

    clickOnCompareButton(){
        this.compareButton.click();
    }

    clickOnWishlistButton(){
        this.wishlistButton.click();
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