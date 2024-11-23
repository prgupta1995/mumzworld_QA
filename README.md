# Mumzworld QA Automation

This repository contains automated end-to-end test cases for the **Mumzworld** web store using **Cypress** with **Cucumber**. It includes a test flow for user registration, searching products, adding items to the cart, adjusting quantities, and performing the checkout process.

## Features

- **End-to-End Testing**: Covers the full user flow from product search to registration and checkout.
- **Cucumber Integration**: BDD-style test cases using feature files.
- **Reusable Step Definitions**: Organized step definitions for easy maintenance.
- **Cross-Browser Testing**: Supports Chrome and other browsers.

---

## Table of Contents

- [Installation](#installation)
- [Setup](#setup)
- [Usage](#usage)
- [Feature File](#feature-file)
- [Folder Structure](#folder-structure)
- [Scripts](#scripts)
- [Dependencies](#dependencies)

---

## Installation

1. Clone the repository:

```bash
git clone https://github.com/prgupta1995/mumzworld_QA.git
cd mumzworld_QA
```

2. Install dependencies:

```bash
yarn install
```

---

## Setup

Ensure the following tools are installed on your system:

- Node.js (v16 or above)
- Cypress
- Git

---

## Usage

### Running Tests

Open Cypress Test Runner:

```bash
yarn run cypress:open
```

Run All Tests in Headless Mode:

```bash
yarn run cypress:run
```

Run Tests in Chrome:

```bash
yarn run cypress:run:chrome
```

### Feature File

Below is the sample feature file located in cypress/e2e/features:

```gherkin
Feature: User is able to perform the e2e checkout flow with registration

Background:
  Given Open the mumzworld web store

Scenario: Verify that user is able to search the product, add it to the cart, increase the quantity, perform the checkout, and register successfully
  When Enter the search keyword "Pacifier" in the search box and press enter
  Then Searched Results are displayed and contains "Pacifier"
  Then Add the first product to the cart and verify the same product on the cart page
  Then Increase the product qty to "5"
  Then Click on the Proceed to Checkout button and verify that the user lands on the "Sign In" page
  Then Click the Click Account link and enter "Pri", "Test", "pri@gmail.com", "Password@123", click on the Create Account button
  Then Verify that the account is successfully by checking the "Shipping address" page
```

---

## Folder Structure

```bash
mumzworld_QA/
├── cypress/
│   ├── e2e/
│   │   ├── features/                 # Gherkin feature files
│   │   ├── step_definitions/         # Step definitions
│   ├── fixtures/                     # Test data
│   ├── support/                      # Cypress support files
├── node_modules/                     # Installed dependencies
├── cypress.config.js                 # Cypress configuration
├── package.json                      # Project metadata and scripts
└── README.md                         # Documentation
```

---

## Scripts

| Script                      | Description                           |
| --------------------------- | ------------------------------------- |
| yarn run cypress:open       | Opens Cypress Test Runner             |
| yarn run cypress:run        | Runs tests in headless mode           |
| yarn run cypress:run:chrome | Runs tests in Chrome in headless mode |

---

## Dependencies

### Dev Dependencies

- _Cypress:_ JavaScript end-to-end testing framework.
- _@badeball/cypress-cucumber-preprocessor:_ Cucumber integration for Cypress.
- _@bahmutov/cypress-esbuild-preprocessor:_ Preprocessor for modern JavaScript.
- _esbuild:_ High-performance bundler for faster builds.

### Dependencies

- _Chance.js:_ Library for generating random test data.

---

## Author

Priyanka Madan Lal
📧 priyanka.gupta881995@gmail.com
🔗 [GitHub](https://github.com/prgupta1995)
