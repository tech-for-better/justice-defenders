describe("Landing renders correctly", () => {
  beforeEach(() => {
    cy.visit("#/");
  });
  it(" should contain button take takes to home page", () => {
    cy.get("[data-cy=start-button]").click();
    cy.url().should("eq", Cypress.config().baseUrl + "/#/home");
  });

  it("should show Justice Defenders logo", () => {
    cy.get("[data-cy=jd-logo]").and("be.visible");
  });
  it("should show button to download app for windows", () => {
    cy.get("[data-cy=win-download]").and("be.visible");
  });
});
