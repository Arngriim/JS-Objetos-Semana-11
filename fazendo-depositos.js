const cliente = {
    nome: "Carlos",
    idade: 26,
    cpf: "000000011",
    email: "carlos@email.com",
    fones: ["88995554678", "889894565472"],
    
    dependentes: [
        {
            nome: "Vall", 
            parentesco: "irmã",
            dataNasc:"10/03/1990" },
        {
            nome: "Vanessa",
            parentesco: "irmã",
            dataNasc: "08/03/2001"
        }
    ],

    saldo:100,

    depositar:function(valor)
    {
        this.saldo += valor
    }
}

console.log(cliente.saldo)
cliente.depositar(30)
console.log(cliente.saldo)

    
