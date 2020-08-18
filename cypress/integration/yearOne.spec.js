
describe('Year 1 page navigates around correctly', () => {
    beforeEach(() => {
        cy.visit('/year1');
    });
    it('Module 1 takes you to module1 endpoint', () => {
      cy.get("[data-cy=module-cards]").first().click();
      cy.url().should("eq", Cypress.config().baseUrl + "/year1/module1");
    });
    it('Should render a help card', () => {
        cy.get("[data-cy=help]").and('be.visible')
        cy.get("[data-cy=help-icon]").and('be.visible')
        cy.get("[data-cy=help-text]").and('be.visible')
    });
    it('Should render some intro text and a title', () => {
        cy.get("[data-cy=year_intro-text]").and('be.visible')
        cy.get("[data-cy=year-title]").and('be.visible')
    })
})
