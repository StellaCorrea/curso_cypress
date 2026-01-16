## Diferença entre Mock e Stub

##                 Stub

Um Stub é um objeto ou função “falsa” usada para simular respostas de uma dependência externa, sem se preocupar em verificar como ela foi chamada.

👉 Ele apenas retorna dados controlados, ajudando a isolar o teste.

## Características do Stub:

Simula o retorno de uma função ou serviço

Não valida chamadas, apenas responde

Usado quando o foco do teste é o resultado

Exemplo de uso:

Simular uma resposta de API

Retornar um usuário falso

Evitar chamadas reais ao backend

Exemplo conceitual:

“Quando chamar a função getUser(), sempre retorne esse usuário fake.”

##                  Mock

Um Mock também é um objeto ou função falsa, mas com um objetivo diferente:
ele verifica interações, ou seja, como e quantas vezes algo foi chamado.

👉 O foco do Mock é comportamento, não apenas retorno.

## Características do Mock:

Pode simular retornos

Verifica se a função foi chamada

Verifica quantas vezes foi chamada

Verifica com quais parâmetros foi chamada

Exemplo de uso:

Garantir que uma função foi executada

Verificar se uma API foi chamada

Validar chamadas de métodos internos

Exemplo conceitual:

“Verifique se a função saveUser() foi chamada exatamente 1 vez com esse usuário.”

🔍 Resumo rápido
Conceito	Stub	Mock
Simula retorno	✅	✅
Verifica chamadas	❌	✅
Foco do teste	Resultado	Comportamento
Uso comum	Dados fake	Validação de interações
🧠 Quando usar cada um?

Use Stub quando:

Você só precisa de um retorno controlado

Não importa como a função foi chamada

Use Mock quando:

Você precisa garantir que algo foi chamado

Quer validar fluxo e comportamento do sistema