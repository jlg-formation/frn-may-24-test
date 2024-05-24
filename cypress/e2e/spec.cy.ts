describe("template spec", () => {
  it("passes", () => {
    cy.visit("http://localhost:8081/");

    cy.contains(/Choose a phot./);

    cy.contains("USE this photo", {
      matchCase: false,
    }).click();

    cy.contains("Reset").click();

    cy.contains("Use this photo").click();

    cy.get("[aria-label='Add']").click();
    cy.get("[aria-label='smile']").click();

    cy.get("[aria-label='image'] [aria-label='smile']").click().click();
  });
});
