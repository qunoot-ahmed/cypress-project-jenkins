class AdPage {
    elements = {
        customLogoLink: () => cy.get('.custom-logo-link'),
        postTitle: () => cy.get(".post-title")
    }

    clickStartButton() {
        this.elements.customLogoLink().should("be.visible").click();
        this.elements.postTitle();
    }
}
module.exports = new AdPage();