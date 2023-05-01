export function valida(input){
    const tipoDeInput = input.dataset.tipo;

    if(validadores[tipoDeInput]) {
        validadores[tipoDeInput](input)
    }
}

const validadores = {
    dataNascimento:input => validaDataNascimento(input)
}

function validaDataNascimento(input) {
    const dataRecebida = new Date(input.value) //Pega somente o valo0r do Input e transforma string em calendário
    let mensagem = ""

    if(!maiorQue18(dataRecebida)){
        
        mensagem = "Você deve ser maior de 18 anos para se cadastrar"
    }

    input.setCustomValidity(mensagem);
}


//comparação das datas
function maiorQue18 (data) {
    const dataAtual = new Date()
    const dataMais18 = new Date(data.getUTCFullYear() + 18, data.getUTCMonth(), data.getUTCFullDate())
    console.log(dataAtual)
    return dataMais18 <= dataAtual
}