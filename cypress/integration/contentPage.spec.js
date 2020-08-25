describe("Audio page functions as intended", () => {
  beforeEach(() => {
    cy.visit("/#/year1/module1/subtopic1/audio");
  });
  it("shows correct title for Audio page", () => {
    cy.get("[data-cy=content-heading]").contains("audio");
  });

  it("Should render a help card", () => {
    cy.get("[data-cy=help]").and("be.visible");
    cy.get("[data-cy=help-icon]").and("be.visible");
    cy.get("[data-cy=help-text]").and("be.visible");
  });
});

describe("Reading page functions as intended", () => {
  beforeEach(() => {
    cy.visit("/#/year1/module1/subtopic1/reading");
  });
  it("shows correct title for Readings page", () => {
    cy.get("[data-cy=content-heading]").contains("reading");
  });

  it("Should render a help card", () => {
    cy.get("[data-cy=help]").and("be.visible");
    cy.get("[data-cy=help-icon]").and("be.visible");
    cy.get("[data-cy=help-text]").and("be.visible");
  });
});

describe("Video page functions as intended", () => {
  beforeEach(() => {
    cy.visit("/#/year1/module1/subtopic1/videos");
  });
  it("shows correct title for Video page", () => {
    cy.get("[data-cy=content-heading]").contains("videos");
  });

  it("Should render a help card", () => {
    cy.get("[data-cy=help]").and("be.visible");
    cy.get("[data-cy=help-icon]").and("be.visible");
    cy.get("[data-cy=help-text]").and("be.visible");
  });
});
