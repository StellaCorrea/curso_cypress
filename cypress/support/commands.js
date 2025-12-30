
// COMANDO PARA UTILIZAR DOS SCREENSHOTS FORMATANDO A DATA E HORA
Cypress.Commands.add('dataHora', () => {
  const now = new Date();
  const data = now.toISOString().split('T')[0];
  const hora = now.toTimeString().split(' ')[0].replace(/:/g, '-');

  return `${data}_${hora}`;
});

