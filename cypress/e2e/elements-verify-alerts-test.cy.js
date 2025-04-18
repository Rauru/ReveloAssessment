/// <reference types="cypress" />
import ElementsBusinessPage from "../page-controllers/domain-controllers/elementsPageController";


describe('Test elements functionality', () => {
  let elementsPage
  beforeEach(() => {
    elementsPage = new ElementsBusinessPage()
    elementsPage.goToAlertPage()
  })


  it('Verify Click Button to see alert', () => {
    elementsPage.clickAlertButton()
  });


})