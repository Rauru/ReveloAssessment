class NavigationHelper {
  urlMappings = {
    'Book Store Application': 'books',
    'Alerts, Frame & Windows': 'alertsWindows',
  };

  verifyUrlForCardsAndReturnHome(sectionName) {
    const expectedUrlPart = this.urlMappings[sectionName] || sectionName.toLowerCase();
    cy.url().should('include', expectedUrlPart);
    cy.goToHomepage();
    return this;
  }

  verifyNewTabURL(origin, url) {
    cy.get('@bannerHref').then((href) => {
      cy.origin(origin, { args: { href, url } }, ({ href, url }) => {
        cy.visit(href);
        cy.url().should('equal', url);
      });
    });
    cy.goToHomepage();
    return this;
  }
}

export default NavigationHelper;