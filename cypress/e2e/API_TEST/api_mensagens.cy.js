
// Você está testando uma rota protegida da API Adopet que:

// Busca mensagens

// De um adotante específico

// Usando JWT (Bearer Token)

describe('API Adopet - TESTE MENSAGEM', () => {
    // Usando um JWT já gerado
    //usuário JÁ logado
    const authorization = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhZTk2ODdkNC1jMTQxLTQ0M2ItYWFhNS03OTEyYjRlNDM5YWQiLCJhZG9wdGVyTmFtZSI6IkVzdGV2w6NvIiwiaWF0IjoxNzY5NDc5MjMwLCJleHAiOjE3Njk3Mzg0MzB9.e2c-_rfSwGz7jl6lvcIzK1y0zYFNarISvyZrwmZFAx8'

    it('Mensagens da API Adopet', () => {
        cy.request( {
            method: 'GET',
            url: 'https://adopet-api-i8qu.onrender.com/mensagem/ae9687d4-c141-443b-aaa5-7912b4e439ad',
             //Esse ae9687d4-c141-443b-aaa5-7912b4e439ad É o ID do adotante

            headers: {authorization}
        }).then((res) => {
            expect(res.status).to.be.equal(200)
            expect(res.body).is.not.empty
            expect(res.body).to.have.property('msg')

//             Passo a passo do lado do backend:
//             Recebe o GET /mensagem/:id
//             Lê o header Authorization
//             Valida:
//             token existe?

// token é válido?

// token não expirou?
        })
    })
})