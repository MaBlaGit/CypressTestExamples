// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
// import "./commands";
import "cypress-real-events";

import { userLogin } from "@root/cypress/support/commands/logUser.command";
import { countCartProducts } from "@root/cypress/support/commands/countCartProducts.command";
import { deleteAllProducts } from "@root/cypress/support/commands/deleteAllProducts.command";
import { removeAllWishlist } from "@root/cypress/support/commands/removeAllWishlist.command";

Cypress.Commands.add("userLogin", userLogin);
Cypress.Commands.add("countCartProducts", countCartProducts);
Cypress.Commands.add("deleteAllProducts", deleteAllProducts);
Cypress.Commands.add("removeAllWishlist", removeAllWishlist);

// Alternatively you can use CommonJS syntax:
// require('./commands')
const registerCypressGrep = require("@cypress/grep");
registerCypressGrep();
