# Cypress Test Automation with MochaAwesome Reporting

## Prerequisites
Ensure you have the following installed:
- Node.js

## Folder Structure
/cypress
  ├── e2e/tests        # Test files
  ├── fixtures         # Test data
  ├── reports          # MochaAwesome test reports
  ├── support          # Custom commands and utilities
/pages                # Page Object Model files
.env                  # Environment variables
cypress.config.js     # Cypress configuration
package.json          # Project dependencies
README.md             # Setup and usage instructions

## Setup Instructions  
1. cd FINAL_DEMO
2. Install dependencies:
- npm install

## Project Dependencies
This project uses the following packages:

"devDependencies": {
    "cypress": "^14.1.0",
    "dotenv": "^16.4.7",
    "mocha": "^11.1.0",
    "mochawesome": "^7.1.3",
    "mochawesome-merge": "^5.0.0",
    "mochawesome-report-generator": "^6.2.0"
}

## Running Cypress Tests
- Run in GUI mode:
npx cypress open

- Run in headless mode:
npx cypress run
