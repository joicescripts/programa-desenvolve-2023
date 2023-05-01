const cliente = {
    nome: "Andre",
    idade: 36,
    cpf:"46546545645",
    email: "andre@email.com",
    fones:["55988234091","559994457294"]

   
}
// adicionando vários telefones em um objeto

// cliente.fones.forEach(fone => console.log(fone))

cliente.dependentes = {
nome:"Sara" ,
parentesco:"filha" ,
dataNascimento:"20/03/2011"
}
console.log(cliente)

cliente.dependentes.nome = "Sara Silva"

console.log(cliente)