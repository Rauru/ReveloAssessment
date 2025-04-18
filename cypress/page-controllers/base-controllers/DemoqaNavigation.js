class DemoqaPage {

  visit() {
    cy.visit('/https://demoqa.com/');
    return this;
  }

  clickCategoryCard(card) {
    cy.contains('h5', card).click();
  }

  checkCardIsVisible(card) { 
    cy.contains('h5', card).should('be.visible')
  }

  checkImageBannerIsVisible() {
    cy.get('.banner-image').should('be.visible');
  }

  clickImageBanner() {
  cy.get('.banner-image').parent('a').then(($a) => {
    const href = $a.prop('href');
    cy.get('.banner-image').parent('a').invoke('removeAttr', 'target').click();
    // Store href in an alias so we can access it
    cy.wrap(href).as('bannerHref');
  });
  return this;
  }

  clickHeader() {
    cy.get('header a img').click();
    return this;
  }
}

export default DemoqaPage;