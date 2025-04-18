/// <reference types="cypress" />
import HomepageBusinessPage from '../page-controllers/domain-controllers/demoqaHomepageController';

describe('DemoQA Homepage Functionality', () => {
  let homepagePage;
  beforeEach(() => {
    cy.goToHomepage(); 
    homepagePage = new HomepageBusinessPage();
  })

  it('Verify category cards are visible and take user to the correct URL', () => {
    homepagePage.checkCategoryCardURL('Elements')
    homepagePage.checkCategoryCardURL('Forms')
    homepagePage.checkCategoryCardURL('Alerts, Frame & Windows')
    homepagePage.checkCategoryCardURL('Widgets')
    homepagePage.checkCategoryCardURL('Interaction')
    homepagePage.checkCategoryCardURL('Book Store Application')
  })

  it('Verify banner image redirects to the selenium training page', () => {
    homepagePage.checkImageBannerURL()
  })

  it('Verify header redirects to homepage', () => {
    homepagePage.checkHeaderIsVisibleAndRedirectsToHomepage()
  })

})
