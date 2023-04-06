function cliente(nome, cpf, email, saldo) {
    this.nome = nome
    this.cpf = cpf
    this.email = email
    this.saldo = saldo
    this.depositar = function(valor) {
        this.saldo += valor
    }
}
const carlos = new cliente("Carlos", "00000042", "calros@email.com", 500)

console.log(carlos)