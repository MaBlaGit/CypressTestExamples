import { BasePage } from "@root/cypress/support/pages/base.page";
import { HeaderComponent } from '@root/cypress/support/components/header.component';

export class WishlistPage extends BasePage {
    url = '/index.php?route=account/wishlist';

    headerComponent: HeaderComponent = new HeaderComponent();

    get wishlistTable(){
        return cy.get('#account-wishlist table');
    }

    get deleteButton(){
        return cy.get('.text-danger');
    }

    get successAlert(){
        return cy.get('.alert-success');
    }

    get emptyWishlistMessage(){
        return cy.get('#content');
    }

    clickOnDeleteButton(){
        this.deleteButton.click();
    }

    removeAllElementsFromWishlist(){
        this.deleteButton.each(removeButton => {
            cy.wrap(removeButton).click();
        });
    }
}