const cliente = {
    nome: "Carlos",
    idade: 26,
    cpf: "000000011",
    email: "carlos@email.com",
    fones: ["88995554678", "889894565472"]
}

cliente.dependetes = {
    nome: "Vall", 
    parentesco: "irmã",
    dataNasc:"10/03/1990"
}
 console.log(cliente)

 cliente.dependetes.nome = "Vall Silva"

 console.log(cliente)
