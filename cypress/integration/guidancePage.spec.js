describe("Guidance page renders correctly", () => {
  beforeEach(() => {
    cy.visit("#/extra-guidance");
  });
  it("should contain correct heading", () => {
    cy.get("[data-cy=heading]").contains("Extra guidance");
  });

  it("should render intro text", () => {
    cy.get("[data-cy=intro]").and("be.visible");
  });
  it("Should render at least one piece of media content", () => {
    cy.get("[data-cy=content-media]").its("length").should("be.gt", 0);
  });
});
