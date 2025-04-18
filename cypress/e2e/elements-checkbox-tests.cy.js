/// <reference types="cypress" />
import ElementsBusinessPage from "../page-controllers/domain-controllers/elementsPageController";

describe('Test elements functionality', () => {
  let elementsPage
  beforeEach(() => {
    elementsPage = new ElementsBusinessPage()
    elementsPage.goToElementsPage()
  })


  it('Verify check boxes can be checked and are displayed in the "you have selected box"', () => {
    elementsPage.openCheckBoxElement()
    .expandAllCheckBoxElements()
    elementsPage.clickCheckBoxElement("notes")
    elementsPage.clickCheckBoxElement("commands")
    elementsPage.clickCheckBoxElement("react")
    elementsPage.clickCheckBoxElement("angular")
    elementsPage.clickCheckBoxElement("veu")
    elementsPage.clickCheckBoxElement("public")
    elementsPage.clickCheckBoxElement("private")
    elementsPage.clickCheckBoxElement("classified")
    elementsPage.clickCheckBoxElement("general")
    elementsPage.clickCheckBoxElement("wordFile")
    elementsPage.clickCheckBoxElement("excelFile")
  })

  it('Verify parent check boxes are checked when all child elements are checked', () => {
    elementsPage.openCheckBoxElement()
    .expandAllCheckBoxElements()
    elementsPage.clickCheckBoxElement("notes")
    elementsPage.clickCheckBoxElement("commands")
    elementsPage.parentCheckBoxShouldBeChecked("desktop")
    elementsPage.clickCheckBoxElement("react")
    elementsPage.clickCheckBoxElement("angular")
    elementsPage.clickCheckBoxElement("veu")
    elementsPage.parentCheckBoxShouldBeChecked("workspace")
    elementsPage.clickCheckBoxElement("public")
    elementsPage.clickCheckBoxElement("private")
    elementsPage.clickCheckBoxElement("classified")
    elementsPage.clickCheckBoxElement("general")
    elementsPage.parentCheckBoxShouldBeChecked("office")
    elementsPage.parentCheckBoxShouldBeChecked("documents")
    elementsPage.clickCheckBoxElement("wordFile")
    elementsPage.clickCheckBoxElement("excelFile")
    elementsPage.parentCheckBoxShouldBeChecked("downloads")
    elementsPage.parentCheckBoxShouldBeChecked("home")
  })

  it('Verify check boxes can be unchecked', () => {
    elementsPage.openCheckBoxElement()
    .expandAllCheckBoxElements()
    elementsPage.doubleClickCheckBoxElement("notes")
    elementsPage.doubleClickCheckBoxElement("commands")
    elementsPage.doubleClickCheckBoxElement("react")
    elementsPage.doubleClickCheckBoxElement("angular")
    elementsPage.doubleClickCheckBoxElement("veu")
    elementsPage.doubleClickCheckBoxElement("public")
    elementsPage.doubleClickCheckBoxElement("private")
    elementsPage.doubleClickCheckBoxElement("classified")
    elementsPage.doubleClickCheckBoxElement("general")
    elementsPage.doubleClickCheckBoxElement("wordFile")
    elementsPage.doubleClickCheckBoxElement("excelFile")
    
  })

})