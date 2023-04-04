describe("Nav", () => {
    it("clicks opens the nav-toggle", () => {
      cy.visit(pageUrl);
      // Opens nav
      cy.get(menuNav).click();
      // Closes nav
      cy.wait(1000);
      cy.get(menuNav).click();
    });
  });