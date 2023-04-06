const clientes = [{
    nome: "Carlos",
    idade: 26,
    cpf: "000000011",
    email: "carlos@email.com",
    fones: ["88995554678", "889894565472"],

        dependentes: [{
            nome: "Vall", 
            parentesco: "irmã",
            dataNasc:"10/03/1990"
        }],
    },
    {
        nome: "Juliana",
        cpf: "545645454",
        dependentes: [{
            nome: "Sophia",
            parentesco: "Filha",
            dataNasc: "30/08/2020"
        }],

    }
]
const listaDependentes = [...clientes[0].dependentes,...clientes[1].dependentes]    // ... spread operator, sintaxe de espalhamento 

console.table(listaDependentes)