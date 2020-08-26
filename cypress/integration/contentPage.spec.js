describe("Audio page functions as intended", () => {
  beforeEach(() => {
    cy.visit("/#/year1/module1/subtopic1/audio");
  });
  it("shows correct title for Audio page", () => {
    cy.get("[data-cy=content-heading]").contains("audio");
  });
  it("Should render SubNavbar", () => {
    cy.get("[data-cy=subNavbar]").and("be.visible");
  });
  it("Should render at least one piece of media content", () => {
    cy.get("[data-cy=content-media]").its("length").should("be.gt", 0)
  });
  it("The page title should be in the subnavbar sublist", () => {
    cy.get("[data-cy=content-heading]").then($title => {
      const titleText = $title.text();
      cy.get("[data-cy=subNavbar-sublist-item]").first().then($sublistItem => {
        const sublistItemText = $sublistItem.text()
        expect(titleText).to.equal(sublistItemText) 
      })
    })
  });
  it("Should render subnavbar sublist", () => {
    cy.get("[data-cy=subNavbar-sublist]").and("be.visible");
  })
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
