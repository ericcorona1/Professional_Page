const pageUrl = "http://127.0.0.1:5500/";
const menuNav = "#nav-toggle-label";

describe("Visit Page", () => {
  it("Visits the Portfolio Page", () => {
    cy.visit(pageUrl);
  });
});

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

describe("Navigate to skills in mobile", () => {
  it('clicks the "skills" link', () => {
    cy.visit(pageUrl);
    cy.get(menuNav).click();
    cy.get('[data-test="skills"]').click();
    cy.url().should("include", "/#skills");
  });
});

// some trouble, cypress doesn't open the page
// cypress opens a blank page with visit 
// or it doesn't see that resume.pdf is in the url with
// the request method
describe("Navigate to resume in mobile", () => {
  it('clicks the "resume" link', () => {
    cy.visit(pageUrl);
    cy.get(menuNav).click();
    cy.get('[data-test="resume"]').should('have.attr', 'target', '_blank') // Check that the link opens in a new tab
      .then(link => {
        const resumeUrl = link.prop('href') // Get the URL of the link
        console.log('Visiting URL:', resumeUrl);
        cy.request(resumeUrl); // Visit the URL of the link
        cy.wait(5000);
        cy.url().should("include", "/resume.pdf");
      })
  });
});

// second attempt still no good
describe('Navigate to resume in mobile', () => {
  it('clicks the "resume" link and opens PDF in new tab', () => {
    cy.visit('/');
    cy.get('[data-test="resume"]').should('have.attr', 'target', '_blank') // Check that the link opens in a new tab
      .then(link => {
        const url = link.prop('href') // Get the URL of the link
        cy.window().then(win => {
          const pdfWindow = win.open(url, '_blank'); // Open the PDF in a new tab
          cy.wrap(pdfWindow).its('location').should('contain', '/resume.pdf'); // Check that the new tab navigated to the PDF
        });
      })
  });
});



// won't pass yet because the submit doesn't reload page
describe("Form", () => {
  it("fills out the form and submits successfully", () => {
    cy.visit(pageUrl);
    cy.get("#fullname").type("John Doe", { force: true });
    cy.get("#email").type("johndoe@example.com", { force: true });
    cy.get("#message").type("Hello, this is John.");
    cy.contains("SEND").click();
  });
});
