describe('Verificação página inicial adobet', () => {
  it('Deve acessar a tela de principal do site adobet', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/', { timeout: 10000 });
    cy.wait(20000)
    cy.get('img[alt="Logo AdoPet"]')
  .should('be.visible')
  })
})