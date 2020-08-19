describe("Visit year1 page", () => {
  beforeEach(() => {
    cy.visit("/home");
  });
  it("Year 1 takes to year 1 page", () => {
    cy.get("[data-cy=year1]").click();
    cy.url().should("eq", Cypress.config().baseUrl + "/year1");
  });

  it("Navbar has links to Year 2 and Year 3", () => {
    cy.get("[data-cy=year2]").contains("Year 2 Modules");
    cy.get("[data-cy=year3]").contains("Year 3 Modules");
    cy.get("[data-cy=extra-guidance]").contains("Extra Guidance");
  });

  it("Renders a link to the justice defenders website", () => {
    cy.get("[data-cy=external-link]").contains("Visit")
  })
});
