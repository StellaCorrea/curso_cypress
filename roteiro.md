ROTEIRO DE TESTE DO SITE ADOPET


Funcionalidade: Cadastro no site Adopet

Cenário: Realizar um cadastro no site com sucesso

Passos:

O usuário acessa a página de cadastro.
O usuário preenche o campo "Nome".
O usuário preenche o campo "E-mail" com um endereço de e-mail válido.
O usuário preenche o campo "Senha" com uma senha válida.
O usuário preenche o campo "Confirmação de Senha" com a mesma senha inserida no passo anterior.
O usuário clica no botão "Cadastrar".

Resultados Esperados:
O sistema processa as informações fornecidas.

Regra de Negócio:
E-mail e senha são campos obrigatórios para o cadastro.

RESULTADO DO TESTE ✅



---

CAMINHO TRISTE CADASTRO INCORRETO

Funcionalidade: Cadastro INCORRETO no site Adopet

Cenário: Realizar um cadastro no site sem êxito

Passos:

O usuário acessa a página de cadastro.
O usuário preenche o campo "Nome".
O usuário não preenche o campo "E-mail".
O usuário preenche o campo "Senha" com uma senha válida.
O usuário preenche o campo "Confirmação de Senha" com a mesma senha inserida no passo anterior.
O usuário clica no botão "Cadastrar".

Resultados Esperados:
O sistema deve barrar esse cadastro já que um dos campos obrigatórios não foi preenchido
Deve retornar uma mensagem "É necessário informar um endereço de email"

Regra de Negócio:
E-mail e senha são campos obrigatórios para o cadastro.

RESULTADO DO TESTE ❌ O TESTE FUNCIONOU CORRETAMENTE E NÃO PERMITIU O CADASTRO DO USUÁRIO POR CONTA DO CAMPO OBRIGATÓRIO NÃO PREENCHIDO.

---

caminho TRISTE login Incorreto

Funcionalidade: Login INCORRETO no site Adopet

Cenário: Falha no login do sistema

Passos:

O usuário acessa a página de login.
O usuário insere um e-mail e senha fora do padrão aceito nos campos correspondentes.
O usuário clica no botão "Entrar".
Resultados Esperados:

O sistema valida as credenciais fornecidas.
O sistema exibe mensagens de erro específicas para o e-mail e senha inseridos incorretamente, como: "Por favor, verifique o e-mail digitado" e/ou "A senha deve conter pelo menos uma letra maiúscula, um número e ter entre 6 e 15 caracteres".
Regra de Negócio:

O e-mail deve ter um formato válido.
A senha deve conter pelo menos uma letra maiúscula, um número e ter entre 6 e 15 caracteres

RESULTADO DO TESTE ❌ O TESTE FUNCIONOU CORRETAMENTE E NÃO PERMITIU O LOGIN DO USUÁRIO POR CONTA DOS CAMPOS FORA DO PADRÃO.