/// <reference types="cypress" />
import ElementsBusinessPage from "../page-controllers/domain-controllers/elementsPageController";
import { generateRandomUser } from "../support/generateRandomFixture";

describe('Test text box elements functionality', () => {
  let elementsPage
  let userData
  let randomizedUserData
  before(() => {
    randomizedUserData = generateRandomUser();
    cy.fixture('userData').then((data) => {
      userData = data;
    });
  });

  beforeEach(() => {
    elementsPage = new ElementsBusinessPage()
    elementsPage.goToElementsPage()
  })

  it('Check text box submission with static text', () => {
    elementsPage.openTextBoxElement()
    elementsPage.inputFullNameElement(userData.fullName)
    elementsPage.inputEmail(userData.email)
    elementsPage.inputCurrentAddress(userData.currentAddress)
    elementsPage.inputPermanentAddress(userData.permanentAddress)
    elementsPage.submitForm()
    elementsPage.verifyTextBoxSubmissionMatchesUserData(userData)
  
  })

  it('Check text box submission with randomized text', () => {
    elementsPage.openTextBoxElement()
    elementsPage.inputFullNameElement(randomizedUserData.fullName)
    elementsPage.inputEmail(randomizedUserData.email)
    elementsPage.inputCurrentAddress(randomizedUserData.currentAddress)
    elementsPage.inputPermanentAddress(randomizedUserData.permanentAddress)
    elementsPage.submitForm()
    elementsPage.verifyTextBoxSubmissionMatchesUserData(randomizedUserData)
  })

  it('Check email input with invalid email', () => {
    elementsPage.openTextBoxElement()
    .inputEmail(userData.wrongEmail)
    .submitForm()
    .emailInputShouldDisplayFieldError()
  })

})