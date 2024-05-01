export class BasePage {
    protected url = '';

    navigateTo() {
        return cy.visit(this.url);
    }
}