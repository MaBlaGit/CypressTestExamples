# Cypress Example Tests

This repo contains test examples written in Cypress framework.

### Page under test:

 - deployed page => https://ecommerce-playground.lambdatest.io
 
### What do you need to run tests locally

- Node.js 16.x or above
- Chrome browser

### Installation dependencies

Open Terminal, move to the root of the project and run command:

```
npm install
```

### How to run tests

 - Create user account on https://ecommerce-playground.lambdatest.io

- Create ```cypress.env.json``` file in the root of the project with the following structure: 

```
{
    "USER_EMAIL": "put registered email here",
    "PASSWORD": "valid password"
}
```

And that's it. Right now you have two options:


1. Open Cypress dashboard and select desired spec by hand:

```
npx cypress open
```

2. Run all test suites in headless mode

```
npm run cy:all
```