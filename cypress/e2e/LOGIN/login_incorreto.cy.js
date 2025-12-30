// Funcionalidade: Login INCORRETO no site Adopet

// Cenário: Falha no login do sistema

// Passos:

// O usuário acessa a página de login.
// O usuário insere um e-mail e senha fora do padrão aceito nos campos correspondentes.
// O usuário clica no botão "Entrar".
// Resultados Esperados:

// O sistema valida as credenciais fornecidas.
// O sistema exibe mensagens de erro específicas para o e-mail e senha inseridos incorretamente, como: "Por favor, verifique o e-mail digitado" e/ou "A senha deve conter pelo menos uma letra maiúscula, um número e ter entre 6 e 15 caracteres".
// Regra de Negócio:

// O e-mail deve ter um formato válido.
// A senha deve conter pelo menos uma letra maiúscula, um número e ter entre 6 e 15 caracteres

describe("Página de login", () => {
  beforeEach(() => {
    cy.visit("https://adopet-frontend-cypress.vercel.app/", { timeout: 10000 });

    cy.get('img[alt="Logo AdoPet"]').should("be.visible");
  });

  it("Deve acessar a tela principal e fazer login", () => {
    cy.get('[data-test="login-button"]').click();

    cy.get('[data-test="input-loginEmail"]')
      .should("be.visible")
      .type("stella543541652");

    cy.get('[data-test="input-loginPassword"]')
      .should("be.visible")
      .type("senhaerrada");

    cy.get('[data-test="submit-button"]').click();

    // aqui como é um retorno de erro deve ser enfatizado no .get o package.error
    cy.get("p.error")
      .should("be.visible")
      .and("contain.text", "Por favor, verifique o email digitado");

    cy.get("p.error")
      .should("be.visible")
      .and(
        "contains.text",
        "A senha deve conter pelo menos uma letra maiúscula, um número e ter entre 6 e 15 caracteres"
      );
    //   AQUI PRA SALVAR CORRETAMENTE NO ARQUIVO PRECISEI CHAMAR O COMANDO DO CAMMANDS USANDO O .THEN SE NÃO ELE NÃO FUNCIONA
    cy.dataHora().then((dataHora) => {
      cy.screenshot(`login-incorreto_${dataHora}`);
    });
  });
});
