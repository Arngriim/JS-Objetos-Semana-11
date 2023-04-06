function cliente(nome, cpf, email, saldo) {
    this.nome = nome
    this.cpf = cpf
    this.email = email
    this.saldo = saldo
    this.depositar = function(valor) {
        this.saldo += valor
    }
}

function clientePoupanca(nome, cpf, email, saldo, saldoPoup)
{
    cliente.call(this, nome, cpf, email, saldo)
    this.saldoPoup = saldoPoup
}

const nat = new clientePoupanca("Nat", "00000025", "nat@email.com", 500, 100)

console.log(nat)

clientePoupanca.prototype.depositarPoup = function(valor){
    this.saldoPoup+= valor
}
nat.depositarPoup(100)
console.log(nat.saldoPoup)