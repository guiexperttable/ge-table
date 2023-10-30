
describe("html5-table-demo header", () => {
  beforeEach(() => cy.visit("/"));

  // Header
  it("Header cell (0,99) shoud contain 'col 99'", () => {
    cy.get(".ge-table")
      .find('div[data-row-index="0"][data-col-index="99"][data-area="header"]')
      .contains('H0/99');
  });
});

describe("html5-table-demo body", () => {
  beforeEach(() => cy.visit("/"));
  // Body
  it("Body cell (0,0) shoud contain '0/0'", () => {
    cy.get(".ge-table")
      .find('div[data-col-index="0"][data-col-index="0"][data-area="body"]')
      .contains('0/0');
  });
  it("Body cell (0,2) shoud contain '0/2'", () => {
    cy.get(".ge-table")
      .find('div[data-row-index="0"][data-col-index="2"][data-area="body"]')
      .contains('0/2');
  });
});

describe("html5-table-demo footer", () => {
  beforeEach(() => cy.visit("/"));
  // Footer:
  it("Footer cell (10,10) shoud contain 'F1/99'", () => {
    cy.get(".ge-table")
      .find('div[data-row-index="1"][data-col-index="99"][data-area="footer"]')
      .contains('F1/99');
  });
});
