import AdPage from "../../../pages/AdPage";

describe("Navigation Tests", () => {
  beforeEach(() => {
    cy.navigateTo("/");
    cy.url().should("eq", Cypress.config("baseUrl"));
  });

  it("should click the button", () => {
    AdPage.clickStartButton();
    cy.should("be.visible")
      .should("have.text", "Hello");
  })
})
