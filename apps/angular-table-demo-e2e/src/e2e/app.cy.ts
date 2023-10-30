
describe("angular-table-demo simple header", () => {
  beforeEach(() => cy.visit("demo/simple"));

  // Header
  it("Header cell (0,99) shoud contain 'col 99'", () => {
    cy.get(".ge-table")
      .find('div[data-row-index="0"][data-col-index="99"][data-area="header"]')
      .contains('H0/99');
  });
});

describe("angular-table-demo simple body", () => {
  beforeEach(() => cy.visit("demo/simple"));
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

describe("angular-table-demo simple footer", () => {
  beforeEach(() => cy.visit("demo/simple"));
  // Footer:
  it("Footer cell (10,10) shoud contain 'F1/99'", () => {
    cy.get(".ge-table")
      .find('div[data-row-index="1"][data-col-index="99"][data-area="footer"]')
      .contains('F1/99');
  });
});
