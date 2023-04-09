describe("Navigate to skills in mobile", () => {
    it('clicks the "skills" link', () => {
      cy.visit('/');
      cy.get('#nav-toggle-label').click();
      cy.get('[data-test="skills"]').click();
      cy.url().should("include", "/#skills");
    });
  });