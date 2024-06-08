import { AccountPage } from "@root/cypress/support/pages/account.page";
import { LoginPage } from "@root/cypress/support/pages/login.page";
import { ShoppingCartPage } from "@root/cypress/support/pages/shopping-cart.page";
import { WishlistPage } from "@root/cypress/support/pages/wishlist.page";

const accountPage = new AccountPage();
const loginPage = new LoginPage();
const shoppingCartPage = new ShoppingCartPage();
const wishlistPage = new WishlistPage();

Cypress.Commands.add('logUser', (userEmail: string, password: string) => {
    cy.session([userEmail, password], () => {
        loginPage.navigateTo();
        loginPage.logUser(userEmail, password);
    }, {
        validate: () => {
            cy.getCookie('OCSESSID').should('not.be.empty');
        }
    });
});

Cypress.Commands.add('deleteAllProducts', () => {
    const emptyCart = 'Your shopping cart is empty!'
    shoppingCartPage.navigateTo();
    shoppingCartPage.emptyCartMessage.then(message => {
        if(!message.text().includes(emptyCart)){
            shoppingCartPage.clickOnRemoveAllCartProducts();
            shoppingCartPage.emptyCartMessage.should('contain.text', emptyCart);
        }
    });
});

Cypress.Commands.add('countCartProducts', () => {
    return shoppingCartPage.tableRows.then(products => {
        return products.length;
    })
});

Cypress.Commands.add('removeAllWishlist', () => {
    const emptyWishlist = 'No results!'
    wishlistPage.navigateTo();
    wishlistPage.emptyWishlistMessage.then(message => {
        if(!message.text().includes(emptyWishlist)){
            wishlistPage.removeAllElementsFromWishlist();
            wishlistPage.emptyWishlistMessage.should('contain.text', emptyWishlist);
        }
    });
});
