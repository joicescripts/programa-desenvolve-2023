const cliente = {
    nome: "Andre",
    idade: 36,
    cpf:"46546545645",
    email: "andre@email.com",
    fones:[ "55988234091","559994457294" ],
    dependentes: [
        {
        nome:"Sara" ,
        parentesco:"filha" ,
        dataNascimento:"20/03/2011"},
    
        {
            nome:"Sâmia Maria" ,
            parentesco:"filha" ,
            dataNascimento:"04/01/2014" }
    ],
    saldo:0,
    
// this = este
    depositar:function(valor){
        this.saldo += valor
    }
}


let relatorio = "";

for (let info in cliente){
    if(typeof cliente[info] ==="object" || typeof cliente [info] === "function"){
        continue
    } else {
        relatorio += `
        ${info} => ${cliente[info]}
        `
    }
    
}

console.log(relatorio)