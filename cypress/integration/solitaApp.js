describe('Solita names app', function () {
  beforeEach(function () {
    cy.visit('http://localhost:3000');
  });

  it('can be opened', function () {
    cy.contains('Solita Names');
  });

  it('the path is set to "/names"', function () {
    cy.url().should('include', '/names')
  });

  it('renders total amount of names', function () {
    cy.contains('211');
  });
  it('the list is sorted by amount in descending order as the app starts', function () {
    cy.get('.namelist:first').contains('24');
    cy.get('.namelist:last').contains('4');
  });
  it('the names can be sorted by name in descending and ascending order', function () {
    cy.get('.nameButton').click({ force: true })
    cy.get('.namelist:first').contains('Ville');
    cy.get('.nameButton').click({ force: true })
    cy.get('.namelist:first').contains('Anna')
  })
  it('the names can be sorted by amount in descending and ascending order', function () {
    cy.get('.amountButton').click({ force: true })
    cy.get('.namelist:first').contains('4');
    cy.get('.amountButton').click({ force: true })
    cy.get('.namelist:first').contains('24');
  });
  it('a name can be selected from the list', function () {
    cy.get('[data-cy=namelink]:first').click({ force: true })
    cy.contains('Ville');
    cy.get('[data-cy=selected-name]')
  })
  it('after selecting a name, the path changes accordingly', function () {
    cy.get('[data-cy=namelink]:first').click({ force: true })
    cy.contains('Ville');
    cy.url().should('include', '/names/Ville')
  })
  
});
