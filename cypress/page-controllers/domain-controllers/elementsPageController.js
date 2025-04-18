import ElementsPage from "../base-controllers/elementsNavigation";
import NavigationHelper from "../../support/navigationHelper";

class ElementsBusinessPage {
  constructor() {
    this.ElementsPage = new ElementsPage()
    this.navHelp = new NavigationHelper()
  }
  
  goToElementsPage() {
    cy.visit('https://demoqa.com/elements')
  }

  goToWindowPage() {
    cy.visit('https://demoqa.com/browser-windows')
  }

  goToAlertPage() {
    cy.visit('https://demoqa.com/alerts')
  }

  openTextBoxElement(fullName) {
    this.ElementsPage.openTextBoxElement(fullName)
    return this;
  }

  inputFullNameElement(card) {
    this.ElementsPage.inputElementFullName(card)
    this.ElementsPage.fullNameInputShouldContainText(card)
    return this;
  }

  inputEmail(email){
    this.ElementsPage.inputEmail(email)
    this.ElementsPage.emailInputShouldContainText(email)
    return this;

  }

  emailInputShouldDisplayFieldError(){
    this.ElementsPage.emailInputShouldDisplayFieldError() 
    return this;
  }

  inputCurrentAddress(currentAddress){
    this.ElementsPage.inputCurrentAddress(currentAddress)
    this.ElementsPage.currentAddressInputShouldContainText(currentAddress)
    return this;  
  }

  inputPermanentAddress(permanentAddress){
    this.ElementsPage.inputPermanentAddress(permanentAddress)
    this.ElementsPage.permanentAddressInputShouldContainText(permanentAddress)
    return this;  
  }
  
  submitForm(){
    this.ElementsPage.submitForm()
    return this; 
  }

  verifyTextBoxSubmissionMatchesUserData(userData){
    this.ElementsPage.verifyTextBoxSubmissionMatchesUserData(userData)
    return this;
  }

  openCheckBoxElement(){
    this.ElementsPage.openCheckBoxElement()
    return this;
  }
  
  expandAllCheckBoxElements(){
    this.ElementsPage.expandAllCheckBoxElements()
    return this;

  }
  
  clickCheckBoxElement(name){
    this.ElementsPage.clickCheckBoxElement(name)
    this.ElementsPage.checkBoxShouldBeChecked(name)
    this.ElementsPage.youHaveSelectedTextShouldContain(name)
    return this;
  }

  parentCheckBoxShouldBeChecked(name){ 
    this.ElementsPage.checkBoxShouldBeChecked(name)
    return this;

  }

  doubleClickCheckBoxElement(name){
    this.ElementsPage.clickCheckBoxElement(name)
    this.ElementsPage.checkBoxShouldBeChecked(name)
    this.ElementsPage.clickCheckBoxElement(name)
    this.ElementsPage.checkBoxShouldBeUnchecked(name)
    return this;
  }

  openRadioButtonDropdown(){
    this.ElementsPage.openRadioButtonDropdown()
    return this;
  }

  
  clickYesRadioButton(name){
    this.ElementsPage.clickYesRadioButton(name)
    this.ElementsPage.likeRadioButtonShouldBeChecked()
    return this;
  }  

  clickImpressiveRadioButton(name){
    this.ElementsPage.clickImpressiveRadioButton(name)
    this.ElementsPage.impressiveRadioButtonShouldBeChecked
    return this;
  }

  youHaveSelectedTextShouldContain(text){
    cy.contains(`You have selected ${text}`).should('be.visible')
    return this;
  }

  openWindowDropdown(){
    this.ElementsPage.openWindowDropdown()
    return this;
  }

  clickNewTabButton(){
    // Stub window.open before clicking
    cy.window().then((win) => {
      cy.stub(win, 'open').as('windowOpen')
    });
    this.ElementsPage.clickNewTabButton()
    // Verify the URL that would have opened in the new tab
    cy.get('@windowOpen').should('have.been.called')
    cy.get('@windowOpen').should('have.been.calledWith', '/sample')
    return this;
  }

  clickNewWindowButton(){
    // Stub window.open before clicking
  cy.window().then((win) => {
    cy.stub(win, 'open').as('windowOpen')
  });
  cy.get('#windowButton').click()
  
  // Verify that window.open was called
  cy.get('@windowOpen').should('have.been.called')
  cy.get('@windowOpen').should('have.been.calledWith', '/sample')
  }

  clickNewWindowMessageButton(){
    // Stub window.open before clicking
    cy.window().then((win) => {
      cy.stub(win, 'open').as('windowOpen')
    });
  
    cy.get('button').contains('New Window Message').click()
    cy.get('@windowOpen').should('have.been.called')
    cy.get('@windowOpen').should('have.been.calledWith', "", "MsgWindow", "width=500,height=200")
  }

  clickAlertButton(){
    cy.window().then((win) => {
      cy.stub(win, 'prompt').returns('Automated test input');
    });
    cy.get('#alertButton').click();
  }
}

export default ElementsBusinessPage;