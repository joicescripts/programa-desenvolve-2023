class Cliente{
    constructor(nome, cpf, email, saldo){
    this.nome = nome
    this.cpf = cpf
    this.email = email
    this.saldo = saldo
    this.depositar = function(valor){
        this.saldo += valor
    }
}}

// const andre = new cliente("André", "123456789","andre@email.com",100)

// console.log(andre)

function ClientePoupanca(nome, cpf, email, saldo, saldoPoupanca){
    Cliente.call(this, nome, cpf, email, saldo)
    this.saldoPoupanca = saldoPoupanca
}

const ju = new ClientePoupanca("Juliana", "456789123", "ju@email.com", 100,200)

console.log(ju)

ClientePoupanca.prototype.depositarPoup = function(valor){
    this.saldoPoupanca += valor

}
ju.depositarPoup(30)
console.log(ju.saldoPoupanca)