describe("Nav", () => {
    it("clicks opens the nav-toggle", () => {
      cy.visit('/');
      // Opens nav
      cy.get('#nav-toggle-label').click();
      // Closes nav
      cy.wait(1000);
      cy.get('#nav-toggle-label').click();
    });
  });