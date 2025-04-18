/// <reference types="cypress" />
import ElementsBusinessPage from "../page-controllers/domain-controllers/elementsPageController";


describe('Test elements functionality', () => {
  let elementsPage
  beforeEach(() => {
    elementsPage = new ElementsBusinessPage()
    elementsPage.goToWindowPage()
  })


  it('Verify new tab button opens a new tab', () => {
    elementsPage.clickNewTabButton();
    
  });

  it('Verify new window button opens a new window', () => {
    elementsPage.clickNewWindowButton();
  });

  it('Verify New Window Message button opens', () => {
    elementsPage.clickNewWindowMessageButton();
  });


})