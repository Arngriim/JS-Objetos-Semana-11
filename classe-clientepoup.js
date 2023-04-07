class Cliente {
    constructor(nome, email, cpf, saldo){
    this.nome = nome
    this.cpf = cpf
    this.saldo = saldo
    }

    depositar(valor){
        this.saldo += valor
    }
    exibirSaldo(){
        console.log(this.saldo)
    }
}

class ClientePoupanca extends Cliente{
    constructor(nome,email,cpf,saldo,saldoPoupanca){
        super(nome,email,cpf,saldo)
        this.saldoPoupanca = saldoPoupanca
    }

    depositarPoupanca(valor){
        this.saldoPoupanca += valor
    }
}

const carlos = new ClientePoupanca("Carlos", "carlos@email.com", "000000011", 500, 100)

console.log(carlos)

carlos.depositar(50)
carlos.depositarPoupanca(50)

console.log(carlos)