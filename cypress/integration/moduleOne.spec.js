describe("Module 1 page functions as expected", () => {
  beforeEach(() => {
    cy.visit("/year1/module1");
  });
  it("Subtopic 1 takes you to suptopic1 endpoint", () => {
    cy.get("[data-cy=subtopic-cards]").should(
      "have.attr",
      "href",
      "/year1/module1/subtopic1",
    );
    cy.get("[data-cy=subtopic-cards]").first().click();
    cy.url().should(
      "eq",
      Cypress.config().baseUrl + "/year1/module1/subtopic1",
    );
  });
  it("Subtopic cards should be greater than length 0", () => {
    cy.get("[data-cy=subtopic-cards]").its('length').should('be.gt', 0)
  });
  it('Should render Navbar sublist', () => {
    cy.get("[data-cy=navbar-sublist]").its('length').should('be.gt', 0)
  })
  it("Navbar module list should include page title", () => {
    cy.get("[data-cy=navbar-sublist-item]").first().then($li => {
        const value = $li.text()
        cy.get("[data-cy=module-title]").then($title => {
            const title = $title.text()
            expect(title).to.equal(value)
        })
    })
  })
  it("Should render a help card", () => {
    cy.get("[data-cy=help]").and("be.visible");
    cy.get("[data-cy=help-icon]").and("be.visible");
    cy.get("[data-cy=help-text]").and("be.visible");
  });
  it("Should render some intro text and a title", () => {
    cy.get("[data-cy=module_intro-text]").and("be.visible");
    cy.get("[data-cy=module-title]").and("be.visible");
  });
});
