import DemoqaPage from "../base-controllers/DemoqaNavigation";
import NavigationHelper from "../../support/navigationHelper";

class HomepageBusinessPage {
  constructor() {
    this.demoqaPage = new DemoqaPage();
    this.navHelp = new NavigationHelper();
    this.baseUrl = Cypress.config('baseUrl') || 'https://demoqa.com';
  }

  checkCategoryCardURL(card) {
    this.demoqaPage.checkCardIsVisible(card);
    this.demoqaPage.clickCategoryCard(card);
    this.navHelp.verifyUrlForCardsAndReturnHome(card);
    return this;
  }

  checkImageBannerURL() {
    this.demoqaPage.clickImageBanner();
    this.navHelp.verifyNewTabURL('https://www.toolsqa.com', 'https://www.toolsqa.com/selenium-training/');
    return this;
  }

  checkHeaderIsVisibleAndRedirectsToHomepage() {
    this.demoqaPage.checkImageBannerIsVisible();
    this.demoqaPage.clickHeader();
    cy.url().should('equal', `${this.baseUrl}/`);
    return this;
  }

  
}

export default HomepageBusinessPage;