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
    depositar:function(valor){
        this.saldo += valor
    }
}

function oferecerSeguro(obj){
    const propsClientes = Object.keys(obj);
    if(propsClientes.includes("dependentes"))
    {
        console.log(`Oferta de seguro de vida para ${obj.nome}`);

    }
}

//console.log(Object.values(cliente))
oferecerSeguro(cliente)