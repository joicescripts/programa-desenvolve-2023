const cliente = {
    nome: "Andre",
    idade: 36,
    cpf:"46546545645",
    email: "andre@email.com",
    fones:["55988234091","559994457294"],
    dependentes: [{
        nome:"Sara" ,
        parentesco:"filha" ,
        dataNascimento:"20/03/2011"
        }]
}

cliente.dependentes.push({
    nome:"Sâmia Maria",
    parentesco:"filha",
    dataNascimento:"04/01/2014"
})

console.log(cliente)

const filhaMaisNova = cliente.dependentes.filter(dependente => dependente.dataNascimento ==="04/01/2014")

console.log(filhaMaisNova[0].nome)