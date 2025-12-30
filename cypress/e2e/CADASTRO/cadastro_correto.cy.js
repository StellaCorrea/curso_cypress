describe("Verificação página inicial adobet", () => {
  it("Deve cadastrar o usuário de forma adequada, preenchendo os campos corretamente.", () => {
    cy.visit("https://adopet-frontend-cypress.vercel.app/");
    cy.get('img[alt="Logo AdoPet"]').should("be.visible");
    cy.contains("a", "Cadastrar").click();
    cy.get('[data-test="input-name"]').type("Stella");
    cy.get('[data-test="input-email"]').type("stella@hotmail.com");
    cy.get('[data-test="input-password"]').type("algumAsenha123");
    cy.get('[data-test="input-confirm-password"]').type("algumAsenha123");
    cy.contains("button", "Cadastrar").click();
   

  });
});
