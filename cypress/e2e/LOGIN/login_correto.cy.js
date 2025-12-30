describe("Página de login", () => {
  beforeEach(() => {
    cy.visit("https://adopet-frontend-cypress.vercel.app/", { timeout: 10000 });

    cy.get('img[alt="Logo AdoPet"]').should("be.visible");
  });

  it("Deve acessar a tela principal e fazer login", () => {
    cy.get('[data-test="login-button"]').click();

    cy.get('[data-test="input-loginEmail"]')
      .should("be.visible")
      .type("stella@hotmail.com");

    cy.get('[data-test="input-loginPassword"]')
      .should("be.visible")
      .type("algumAsenha123", { log: false });

    cy.get('[data-test="submit-button"]').click();
  });
});
