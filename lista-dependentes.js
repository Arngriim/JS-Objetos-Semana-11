const cliente = {
    nome: "Carlos",
    idade: 26,
    cpf: "000000011",
    email: "carlos@email.com",
    fones: ["88995554678", "889894565472"],

    dependentes: [{
        nome: "Vall", 
        parentesco: "irmã",
        dataNasc:"10/03/1990"
    }]
}

cliente.dependentes.push({
    nome: "Camila",
    parentesco: "irmã",
    dataNasc: "08/03/2001"
})

//console.log(cliente)

const irmaMaisNova = cliente.dependentes.filter(dependente => dependente.dataNasc === "08/03/2001")

console.log(irmaMaisNova)
console.log(irmaMaisNova[0].nome)