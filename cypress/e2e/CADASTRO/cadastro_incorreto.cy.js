
// Cenário: Realizar um cadastro no site sem êxito

// Passos:

// O usuário acessa a página de cadastro.
// O usuário preenche o campo "Nome".
// O usuário não preenche o campo "E-mail".
// O usuário preenche o campo "Senha" com uma senha válida.
// O usuário preenche o campo "Confirmação de Senha" com a mesma senha inserida no passo anterior.
// O usuário clica no botão "Cadastrar".

// Resultados Esperados:
// O sistema deve barrar esse cadastro já que um dos campos obrigatórios não foi preenchido
// Deve retornar uma mensagem "É necessário informar um endereço de email"

describe("Verificação página inicial adobet", () => {
  it("Deve cadastrar o usuário de forma inadequada, sem preencher campos obrigatório como Email e senha.", () => {
    // ENTRA NO SITE ADOPET VIA LINK
    cy.visit("https://adopet-frontend-cypress.vercel.app/");
    // SOLICITA QUE O LOGO DO SITE APARECA PARA VALIDAR SE ENTROU NO SITE CORRETAMENTE 
    cy.get('img[alt="Logo AdoPet"]').should("be.visible");
    // LOCALIZA O BOTÃO DE CADASTRAR E CLICA
    cy.contains("a", "Cadastrar").click();
    // INSERE OS DADOS NOS CAMPOS, MAS DEIXA DE FORA O CAMPO OBRIGATÓRIO EMAIL
    cy.get('[data-test="input-name"]').type("Stella");
    cy.get('[data-test="input-password"]').type("algumAsenha123");
    cy.get('[data-test="input-confirm-password"]').type("algumAsenha123");
    cy.contains("button", "Cadastrar").click();
    cy.get("p.error")
      .should("be.visible")
      .and("have.text", "É necessário informar um endereço de email");
    //   Verifica se esta retornando a mensagem de erro
  });
});
