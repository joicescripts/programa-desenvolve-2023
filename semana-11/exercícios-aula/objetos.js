const cliente = {
    nome: "Andre",
    idade: "36",
    cpf:"46546545645",
    email: "andre@email.com"
}

console.log(`Meu nome é ${cliente.nome} e tenho ${cliente.idade} anos`)

console.log(cliente.cpf.substring(0,3))

// acessar chaves

const chaves =["nome", "idade","cpf","email"]