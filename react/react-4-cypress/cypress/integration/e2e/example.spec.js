describe("descrivi la feature", () => {
  it("descrivi lo scenario", () => {
    cy.visit("http://localhost:5173");
    cy.get("h1").contains("Hello React");
  });
});
