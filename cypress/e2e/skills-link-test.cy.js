describe("Navigate to skills in mobile", () => {
    it('clicks the "skills" link', () => {
      cy.visit(pageUrl);
      cy.get(menuNav).click();
      cy.get('[data-test="skills"]').click();
      cy.url().should("include", "/#skills");
    });
  });