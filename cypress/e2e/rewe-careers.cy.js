describe('Rewe Digital Careers Page Tests', () => {
  
  beforeEach(() => {
    cy.visit('/de/karriere');
  });

  it('Should display the logo on the careers page', () => {
    cy.get('.siteheader__logo').should('be.visible');
  });

  it('Should display the navigation items', () => {
    cy.get('.siteheader__nav-item').should('have.length.greaterThan', 0); 
  });

  it('Should display the "Impressum" link with correct href', () => {
    cy.scrollTo('bottom');
    cy.get('a[aria-label="impressum"]').should('be.visible').and('have.attr', 'href', '/de/impressum');
  });

  it('Should display the "Datenschutz" link with correct href', () => {
    cy.scrollTo('bottom');
    cy.get('a[aria-label="datenschutz"]').should('be.visible').and('have.attr', 'href', '/de/datenschutz');
  });

  it('Should display the "Privatsphäre-Einstellungen" link with correct href', () => {
    cy.scrollTo('bottom');
    cy.get('a[aria-label="Privatsphäre-Einstellungen"]').should('be.visible').and('have.attr', 'href', '#uc-corner-modal-show');
  });

});
