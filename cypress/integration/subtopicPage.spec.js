describe("Subtopic page functions as intended", () => {
  beforeEach(() => {
    cy.visit("/#/year1/module1/subtopic1");
  });
  it("Clicking audio card takes you to audio page", () => {
    cy.get("[data-cy=content-cards]").should(
      "have.attr",
      "href",
      "#/year1/module1/subtopic1/audio",
    );
    cy.get("[data-cy=content-cards]").first().click();
    cy.get("[data-cy=subNavbar-sublist-item").first().contains("Audio");
    cy.url().should(
      "eq",
      Cypress.config().baseUrl + "/#/year1/module1/subtopic1/audio",
    );
  });
  it("Content cards should be greater than length 0", () => {
    cy.get("[data-cy=content-cards]").its("length").should("be.gt", 0);
  });
  it("Should render Navbar sublist", () => {
    cy.get("[data-cy=navbar-sublist]").its("length").should("be.gt", 0);
  });
  it("Should render SubNavbar", () => {
    cy.get("[data-cy=subNavbar]").and("be.visible");
  });
  it("Subnavbar subtopic list should include page title", () => {
    cy.get("[data-cy=subNavbar-item]")
      .first()
      .then(($li) => {
        const value = $li.text();
        cy.get("[data-cy=subtopic-title]").then(($title) => {
          const title = $title.text();
          expect(title).to.equal(value);
        });
      });
  });
  it("Should render a help card", () => {
    cy.get("[data-cy=help]").and("be.visible");
    cy.get("[data-cy=help-icon]").and("be.visible");
    cy.get("[data-cy=help-text]").and("be.visible");
  });
  it("Should render some intro text and a title", () => {
    cy.get("[data-cy=subtopic-intro-text]").and("be.visible");
    cy.get("[data-cy=subtopic-title]").and("be.visible");
  });
  it("Should render breadcrumbs with the correct crumbs", () => {
    cy.get("[data-cy=breadcrumbs]").and("be.visible");
    cy.get("[data-cy=breadcrumbs]").its("length").should("be", 3);
    cy.get("[data-cy=breadcrumbs]").last().contains("Year I")
    cy.get("[data-cy=breadcrumbs]")
      .last()
      .then(($li) => {
        let text = $li.text();
        cy.get("[data-cy=subtopic-title]").then(($title) => {
          const title = $title.text();
          expect(text).to.include(title)
        });
      });
  });
});
