class ElementsPage {

  visit() {
    
    return this;
  }

  goToElementsPage() {
    cy.visit('https://demoqa.com/elements');
    return this;
  }

  openTextBoxElement() {
    cy.contains('span.text', 'Text Box').click();
    return this;
  }

  inputElementFullName(fullName) { 
    cy.get('#userName').type(fullName);
    return this;
  }

  fullNameInputShouldContainText(text) {
    cy.get('#userName').should('have.value', text);
    return this;
  }

  inputEmail(email){
    cy.get('#userEmail').type(email);
    return this;
  }

  emailInputShouldContainText(text) {
    cy.get('#userEmail').should('have.value', text);
    return this;
  }

  emailInputShouldDisplayFieldError(){
    cy.get('#userEmail').should('have.class', 'field-error');
    return this;
  }

  inputCurrentAddress(currentAddress){
    cy.get('#currentAddress').type(currentAddress);
    return this;
  }
  currentAddressInputShouldContainText(text) {
    cy.get('#currentAddress').should('have.value', text);
    return this;
  }

  inputPermanentAddress(permanentAddress){
    cy.get('#permanentAddress').type(permanentAddress);
    return this;
  }
  permanentAddressInputShouldContainText(text) {
    cy.get('#permanentAddress').should('have.value', text);
    return this;
  }
  submitForm(){
    cy.get('#submit').click();
    return this;
  }

  verifyTextBoxSubmissionMatchesUserData(userData){
    cy.get('#name').should('contain', userData.fullName);
    cy.get('#email').should('contain', userData.email);
    cy.get('p#currentAddress').should('contain', userData.currentAddress);
    cy.get('p#permanentAddress.mb-1').should('contain', userData.permanentAddress);
    return this;
  }

  openCheckBoxElement(){
    cy.contains('span.text', 'Check Box').click();
    return this;
  }
  
  expandAllCheckBoxElements(){
    cy.get('button.rct-option.rct-option-expand-all').click();
    return this;
  }


  clickCheckBoxElement(name){
    cy.get(`#tree-node-${name}`).click({ force: true });
    return this;
  }

  checkBoxShouldBeChecked(name){
    cy.get(`#tree-node-${name}`).should('be.checked');
  }

  checkBoxShouldBeUnchecked(name){
    cy.get(`#tree-node-${name}`).should('not.be.checked');
  }

  youHaveSelectedTextShouldContain(name){
    cy.get('#result').should('contain', name);
  }

  openRadioButtonDropdown(){
    cy.get('span.text').contains('Radio Button').click();
    return this;
  }

  clickYesRadioButton(name){
    cy.get('#yesRadio').click({force: true});
    return this;
  }

  likeRadioButtonShouldBeChecked(){
    cy.get('#yesRadio').should('be.checked');
    return this;
  }  

  clickImpressiveRadioButton(name){
    cy.get('#impressiveRadio').click({force: true});
    return this;
  }

  impressiveRadioButtonShouldBeChecked(){
    cy.get('#impressiveRadio').should('be.checked');
    return this;
  }

  openWindowDropdown(){
    cy.contains('Alerts, Frames & Windows').scrollIntoView()
    cy.contains('Alerts, Frames & Windows').click();
    return this;
  }
  clickNewTabButton(){
    cy.get('#tabButton').click();
    return this;
  }


}

export default ElementsPage;