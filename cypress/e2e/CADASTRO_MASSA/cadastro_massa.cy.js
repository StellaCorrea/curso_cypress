
import { usuarios } from '../../fixtures/usuario' //importa a massa de dados do arquivo

describe("Cadastro em massa de usuário na plataforma adopet", () => {

  beforeEach(() => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.get('img[alt="Logo AdoPet"]').should("be.visible");
    cy.contains("a", "Cadastrar").click();
  });

  usuarios.forEach((usuario) => {
    it(`Deve cadastrar o usuário ${usuario.name}`, () => {
      cy.get('[data-test="input-name"]').clear().type(usuario.name);
      cy.get('[data-test="input-email"]').clear().type(usuario.email);
      cy.get('[data-test="input-password"]').clear().type(usuario.password);
      cy.get('[data-test="input-confirm-password"]').clear().type(usuario.password);
      cy.contains("button", "Cadastrar").click();
    });
  });
});
