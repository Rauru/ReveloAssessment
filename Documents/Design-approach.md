# Design Approach

## Project Overview
The approach I took to design the test suite  is to break it down into three important sections,
The 3-layer approach `(test case → page object → base interactions)` makes it easier to maintain and understand test cases.
Each test case is independent to make it easier to implement parallel testing in the future:

**Basic Page object model for locators**: basic interactions, like clicking, finding and interacting with elements.

**Business logic page object models**: combines the basic locators, focusing on the user flow and experince, like filling in a form and submitting the form.

**Test cases**: they mostly focus on calling the methods from the business page object models, making it easier to reuse code, like already created methods for opening a form, filling the form, and verifying the form is submitted correctly.

### Page Object Model (POM) Folder Implementation

Structured the project using a 3-layer Page Object Model:
- **e2e folder - Test Files**: Contains the basic test case definitions and step-by-step workflows.
Uses the logical page objects to express the test in a more readable term.
Focuses on assertions and workflow.

- **domain-controllers folder - Logic Page Objects**: Focuses on the business logic and assertions, combines the base page interactions to add user flow context, combines multiple base operations into meaningful business actions.

- **base-controllers folder - Base Element Interactions**: Contains the lowest-level interactions with the elements UI where actual selectors are handled. Handles element selectors and basic operations.

### Other Files
- **Support files**: Includes methods and functions that share functionality between element logic or domain browsing, like verifying the current URL or generating random text or fixtures.

- **Fixture files**: Static data files for test inputs

This approach ensures:
- Code reusability across test scenarios
- Easier maintenance when UI elements change
- Clearer separation of concerns
- Better readability of test flows
- A requirement of the assessment

### Tool Selection

#### **Cypress**
**Selected for:**
- Faster development cycle due to the time constrain
- Real-time reload and debugging capabilities
- Easier interaction to find locators
- Native time-travel debugger

**Limitations encountered:**
1. **New window/tab testing**: Difficult to implement in Cypress without extensive setup.
2. **Hidden elements**: Elements with `display: none` require `{force: true}` which is not ideal as it bypasses visibility checks.
3. **Cross-domain limitations**: Cypress's architecture makes switching context between tabs and windows difficult.

#### **Allure Reporting**
**Selected for:**
- More understandable test visualization than native Cypress reporting.
- Better organization of test results.
- Better failure analysis capabilities.


**Framework Tradeoffs**: 
While Cypress offers excellent developer experience, certain scenarios (new windows, iframes) would be easier to test with Playwright.

Selenium would provide a more robust test suite with less flaky test cases overtime, but it take considerably longer to set up from scratch and create test cases.

Playwright provides an in between with good code readibility, fast development and less flaky test cases, but requires adding waiting and retries manually, and it requires more time to set up locators and has less debugging tools.



