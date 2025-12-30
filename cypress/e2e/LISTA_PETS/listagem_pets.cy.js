describe("Verificação página inicial adobet", () => {
  it("Deve acessar a tela de principal do site adobet", () => {
    cy.visit("https://adopet-frontend-cypress.vercel.app/", { timeout: 10000 });
    cy.wait(10000);
    cy.get('img[alt="Logo AdoPet"]').should("be.visible");
    cy.contains("a", "Ver pets disponíveis para adoção").click();
    cy.wait(1000);
    cy.contains("p", "Veja os amigos disponíveis para adoção!");

    // aqui é pra scrollar até o fim da página
    cy.scrollTo("bottom");
    // aqui eu coloquei .card e o nome do card pois é uma div class que contém muitos dados
    cy.contains('.card', 'Zelda').should('be.visible');
    cy.wait(100)



  });
});
