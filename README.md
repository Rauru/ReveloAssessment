# Revelo-assessment

Automation suite made with Cypress

## Tools Used
- [Cypress](https://www.cypress.io/) was the testing framework used.
- [Allure](https://docs.qameta.io/allure/) for test reporting locally

## Running it

Go to the root directory of this project and install packages with ```npm install```
### The test cases can be run with the Cypress basic runner, or the Allure one for more detailed reports

### Cypress Test Runner
Run ```npx cypress open``` to launch the Cypress Test Runner, select E2E Testing and Chrome as the browser to launch the test suite.

### Allure Test Runner
Run ```npx allure generate allure-results --clean -o allure-report```
```npx allure open allure-report```  to run the test case with Allure and visualize a more categorized view of the test cases

## Achieved Scope
The project includes :
- Texbox Form test cases
- Radio button test cases
- Check boxes test cases
- Basic test cases for new windows and alets