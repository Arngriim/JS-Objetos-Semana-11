const cliente = {
    nome: "Carlos",
    idade: 26,
    cpf: "000000011",
    email: "carlos@email.com"
}

const chaves = ["nome", "idade", "cpf", "email"]

//console.log(cliente[chave[0]])

chaves.forEach(info => console.log(cliente[info]))