describe("Navigate to resume in mobile", () => {
    it('clicks the "resume" link', () => {
      cy.visit('/');
      cy.get('#nav-toggle-label').click();
      cy.get('[data-test="resume"]').should('have.attr', 'target', '_blank') // Check that the link opens in a new tab
        .then(link => {
          const resumeUrl = link.prop('href') // Get the URL of the link
          console.log('Visiting URL:', resumeUrl);
          cy.request(resumeUrl) // Visit the URL of the link
            .its('status')
            .should('eq', 200);
        })
    });
  });
  