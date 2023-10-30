
describe("table-website", () => {
  beforeEach(() => cy.visit("/"));

  it("should display welcome message", () => {
    cy.get('app-doc-welcome').find('.hero-big').contains("guiexpert/table");
  });
});
