
// Neste teste foi utilizado um stub com cy.intercept() para simular uma falha na API de login, permitindo validar a exibição de mensagens
//  de erro na interface sem dependência do backend.
describe("Página de login credenciais incorretas - erro com stub", () => {

  beforeEach(() => {
//  Intercepta requisições POST para /adotante/login  
    cy.intercept(
      "POST",
      "**/adotante/login",
      {
        statusCode: 400, //mSubstitui a resposta real do backend Retorna erro 400 controlado
        body: {
          message: "Falha no login. Consulte suas credenciais.",
        },
      }
    ).as("stubPost"); //Permite referenciar essa requisição depois Usado com cy.wait("@stubPost")

    cy.visit("https://adopet-frontend-cypress.vercel.app/");
    cy.get('[data-test="login-button"]').click();

    cy.get('[data-test="input-loginEmail"]').type("ster_muniz@hotmail.com");
    cy.get('[data-test="input-loginPassword"]').type("12345@Stella");
    cy.get('[data-test="submit-button"]').click();
  });


  it("Deve exibir mensagem de erro na tela", () => {
    cy.wait("@stubPost");

    cy.contains("Falha no login. Consulte suas credenciais.")
      .should("be.visible");
  });

});
