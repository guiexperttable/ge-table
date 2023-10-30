
describe("svelte-table-demo header", () => {
  beforeEach(() => cy.visit("/"));

  // Header
  it("Header cell (0,0) shoud contain 'First Name'", () => {
    cy.get(".ge-table")
      .find('div[data-row-index="0"][data-col-index="0"][data-area="header"]')
      .contains('First Name');
  });
});

describe("svelte-table-demo body", () => {
  beforeEach(() => cy.visit("/"));
  // Body
  it("Body cell (0,0) shoud contain 'Mirilla'", () => {
    cy.get(".ge-table")
      .find('div[data-col-index="0"][data-col-index="0"][data-area="body"]')
      .contains('Mirilla');
  });
  it("Body cell (0,5) shoud contain '1'", () => {
    cy.get(".ge-table")
      .find('div.ge-table-label[data-row-index="0"][data-col-index="5"][data-area="body"]')
      .contains('1');
  });
});


