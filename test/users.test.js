const usersModel = require('../src/models/usersModel')

describe('Get route test', () => {
    const users = new usersModel({
        "nome": "Bianca da Silva",
        "email": "bibisilva@email.com",
        "senha": "34o258kbj"

    })

    it("Deve chamar o schema e retornar o nome da usuária correto", () => {
        expect(users.nome).toBe("Bianca da Silva")
    })

    it("Deve chamar o schema e retornar o email da usuária correto", () => {
        expect(users.email).toBe("bibisilva@email.com")
    })
    it("Deve chamar o schema e retornar a senha da usuária correto", () => {
        expect(users.senha).toBe("34o258kbj")
    })
})

describe('Create route test', () => {
    const users = new usersModel({
        "nome": "Bianca da Silva",
        "email": "bibisilva@email.com",
        "senha": "34o258kbj"

    })
    it("Deve criar no banco de dados um novo cadastro de usuária", () => {
        users.save().then((dados) => {
            expect(dados.nome).toBe("Bianca da Silva")

        })

    })
})

describe("Update route test", () => {
    it("Deve modificar o nome e atualizar no banco de dados o nome da usuária", () => {
        const users = new usersModel({
            "nome": "Bianca da Silva",
            "email": "bibisilva@email.com",
            "senha": "34o258kbj"

        })

        users.nome = "novo nome"
        users.save().then((dados) => {
            expect(dados.nome).toBe("novo nome")

        })

    })
})

describe("Delete route test", () => {
    it("Deve excluir os dados de uma usuária", () => {
        const users = new usersModel({
            "nome": "Bianca da Silva",
            "email": "bibisilva@email.com",
            "senha": "34o258kbj"


        })
        users.save().then((dados) => {
            users.delete().then((dados) => {
                expect(dados.nome).toBe(null)

            })
        })
    })

})
