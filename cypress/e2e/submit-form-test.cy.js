describe("Form", () => {
    it("fills out the form and submits successfully", () => {
      cy.visit(pageUrl);
      cy.get("#fullname").type("John Doe", { force: true });
      cy.get("#email").type("johndoe@example.com", { force: true });
      cy.get("#message").type("Hello, this is John.");
      cy.contains("SEND").click();
    });
  });