/// <reference types="cypress" />
import ElementsBusinessPage from "../page-controllers/domain-controllers/elementsPageController";

describe('Test elements functionality', () => {
  let elementsPage
  beforeEach(() => {
    elementsPage = new ElementsBusinessPage()
    elementsPage.goToElementsPage()
  })


  it('Verify yes radio button can be checked"', () => {
    elementsPage.openRadioButtonDropdown()
    .clickYesRadioButton()
    .youHaveSelectedTextShouldContain('Yes')
  })

  it('Verify impressive radio button can be checked"', () => {
    elementsPage.openRadioButtonDropdown()
    .clickImpressiveRadioButton()
    .youHaveSelectedTextShouldContain('Impressive')
  })


})