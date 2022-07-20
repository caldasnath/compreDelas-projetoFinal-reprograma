const empreendedorasModel = require('../src/models/empreendedorasModel')

describe('Get route test', () => {
    const empreendedoras = new empreendedorasModel({
        "name": "Catarina dos Anjos",
        "telefone": 81999801224,
        "endereco": "Av.Brasil, 10",
        "bairro": "Jardim Atlantico",
        "categoria": "Pedreira"

    })

    it("Deve chamar o schema e retornar o nome da empreendedora correto", () => {
        expect(empreendedoras.name).toBe("Catarina dos Anjos")
    })

    it("Deve chamar o schema e retornar o telefone da empreendedora correto", () => {
        expect(empreendedoras.telefone).toBe(81999801224) 
    })

    it("Deve chamar o schema e retornar o endereço correto", () => {
        expect(empreendedoras.endereco).toBe("Av.Brasil, 10")
    })

    it("Deve chamar o schema e retornar o bairro correto", () => {
        expect(empreendedoras.bairro).toBe("Jardim Atlantico")
    })

    it("Deve chamar o schema e retornar a categoria", () => {
        expect(empreendedoras.categoria).toBe["Pedreira"]
    })
})

describe("Create route test", () => {
    const empreendedoras = new empreendedorasModel({
        "name": "Catarina dos Anjos",
        "telefone": 81999801224,
        "endereco": "Av.Brasil, 10",
        "bairro": "Jardim Atlantico",
        "categoria": "Pedreira"

    })

    it("Deve criar no banco de dados um novo cadastro de empreendedora", () => {
        empreendedoras.save().then((dados) => {
            expect(dados.name).toBe("")

        })

    })
})

describe("Update route test", () => {
    it("Deve modificar o nome e atualizar no banco de dados o novo nome", () => {
        const empreendedoras = new empreendedorasModel({
            "name": "Catarina dos Anjos",
            "telefone": 81999801224,
            "endereco": "Av.Brasil, 10",
            "bairro": "Jardim Atlantico",
            "categoria": "Pedreira"

        })
        empreendedoras.name = "novo nome"
        empreendedoras.save().then((dados) => {
            expect(dados.name).toBe("novo nome")
        })
    })
})
describe("Delete route test", () => {
    it("Deve excluir os dados da empreendedora", () => {
        const empreendedoras = new empreendedorasModel({
            "name": "Catarina dos Anjos",
            "telefone": 81999801224,
            "endereco": "Av.Brasil, 10",
            "bairro": "Jardim Atlantico",
            "categoria": "Pedreira"
        })
        empreendedoras.save().then((dados) => {
            empreendedoras.delete().then((dados) => {
                expect(dados.name).toBe(null)

            })
        })
    })


})