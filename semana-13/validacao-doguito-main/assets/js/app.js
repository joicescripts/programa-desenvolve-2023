const inputs = document.querySelectorAll('input')

inputs.forEach(input => {

    if(input.dataset.tipo === 'preco') {
        SimpleMaskMoney.setMask(input, {
            prefix: 'R$ ',
            fixed: true,
            fractionDigits: 2,
            decimalSeparator: ',',
            thousandsSeparator: '.',
            cursor: 'end'
        })
    }

    input.addEventListener('blur',(evento) => {
        valida(evento.target)
    })
})


function valida(input){
    const tipoDeInput = input.dataset.tipo;

    if(validadores[tipoDeInput]) {
        validadores[tipoDeInput](input)
    }

    if(input.validity.valid) {
        input.parentElement.classList.remove('input.container--invalido')
        input.parentElement.querySelector('.input-mensagem-erro').innerHTML = ''
    } else {
        input.parentElement.classList.add('input-container--invalido')
        input.parentElement.querySelector('.input-mensagem-erro').innerHTML = mostraMensagemDeErro(tipoDeInput, input)
    }
}

const tiposDeErro = [
    'valueMissing' ,
    'typeMismatch' ,
    'patternMismatch' ,
    'customError'
]

const mensagemDeErro = {
    nome: {
        valueMissing: 'O campo nome não pode estar vazio.',
    },
    email: {
        valueMissing: 'O campo de email não pode estar vazio.',
        typeMisMatch: 'O email digitado não é válido.',
    },
    senha: {
        valueMissing: 'O campo de senha não pode estar vazio.',
        patternMisMatch: 'A senha deve conter entre 6 a 12 caracteres, deve conter pelo menos uma letra maiúscula, um número e não deve conter símbolo.',
    },
    dataNascimento: {
        valueMissing: 'O campo de data de nascimento não pode estar vazio.',
        customError: 'Você deve ser maior de 18 anos para se cadastrar.',
    },
    cpf: {
        valueMissing: 'O campo de CPF não pode estar vazio.',
        customError: 'O CPF digitado não é válido.'
    },
    cep: {
        valueMissing: 'O campo de CEP não pode estar vazio.',
        patternMisMatch: 'O CEP digitado não é valido.',
        customError: 'Não foi possivel buscar o CEP'
    },
    logradouro: {
        valueMissing: 'O campo de logradouro não pode estar vazio.',
        patternMisMatch: 'O logradouro digitado não é valido.'
    },
    cidade: {
        valueMissing: 'O campo de cidade não pode estar vazio.',
        patternMisMatch: 'O cidade digitado não é valido.'
    },
    estado: {
        valueMissing: 'O campo de estado não pode estar vazio.',
        patternMisMatch: 'O estado digitado não é valido.'
    },
    preco: {
        valueMissing: 'O campo de preço não pode estar vazio.'
    }
}

const validadores = {
    dataNascimento: input => validaDataNascimento(input),
    cpf: input => validaCPF(input),
    cep: input => recuperarCEP(input)
}

function mostraMensagemDeErro(tipoDeInput, input) {
    let mensagem = ''
    tiposDeErro.forEach(erro => {
        if(input.validity[erro]){
            mensagem = mensagemDeErro[tipoDeInput][erro]
        }
    })

    return mensagem
}

function validaDataNascimento(input) {
    const dataRecebida = new Date(input.value) //Pega somente o valo0r do Input e transforma string em calendário
    

     if(!maiorQue18(dataRecebida)) {
        mensagem = 'Você deve ser maior que 18 anos para se cadastrar.'
    }

    input.setCustomValidity(mensagem);
}

//comparação das datas
function maiorQue18 (data) {
    const dataAtual = new Date()
    const dataMais18 = new Date(data.getUTCFullYear() + 18, data.getUTCMonth(), data.getUTCFullDate())
    return dataMais18 <= dataAtual
}

function validaCPF(input) {
    const cpfFormatado = input.value.replace(/\D/g, '')
    let mensagem = ''

    if(!checaCPFRepetido(cpfFormatado) || !checaEstruturaCPF(cpfFormatado)) {
        mensagem = 'O CPF digitado não é válido'
    }

    input.setCustomValidity(mensagem)
}

function checaCPFRepetido(cpf) {
    const valoresRepetidos = [
        '00000000000',
        '11111111111',
        '22222222222',
        '33333333333',
        '44444444444',
        '55555555555',
        '66666666666',
        '77777777777',
        '88888888888',
        '99999999999'
    ]
    let cpfValido = true 
    valoresRepetidos.forEach(valor => {
        if(valor===cpf){
            cpfValido = false
        }
    })
    return cpfValido
}


function checaEstruturaCPF(cpf) {
    const multiplicador = 10

    return checaDigitoVerificador(cpf, multiplicador)
}

function checaDigitoVerificador(cpf, multiplicador) {
    if(multiplicador >= 12) {
        return true
    }

    let multiplicadorInicial = multiplicador
    let soma = 0
    const cpfSemDigitos = cpf.substr(0, multiplicador - 1).split('')
    const digitoVerificador = cpf.charAt(multiplicador - 1)
    for(let contador = 0; multiplicadorInicial > 1 ; multiplicadorInicial--) {
        soma = soma + cpfSemDigitos[contador] * multiplicadorInicial
        contador++
    }
    if(digitoVerificador == confirmaDigito(soma)) {
        return checaDigitoVerificador(cpf, multiplicador + 1)
    }
    return false
}

function confirmaDigito(soma) {
    return 11 - (soma % 11)
}

function recuperarCEP(input) {
    const cep = input.value.replace(/\D/g, '')
    const url = `https://viacep.com.br/ws/${cep}/json/`
    const options = {
        method: 'GET', //é o tipo de requisição que será feita.
        mode: 'cors', //indica que a comunicação será feita entre aplicações diferentes.
        headers: {
            'content-type': 'aplication/json;charset-utf-8' // diz como que queremos receber as informações da API.
        }
    }

if(!input.validity.patternMisMatch && !input.validity.valueMissing) {
        fetch(url,options).then(
            response => response.json()
        ).then(
            data => {
                if(data.erro){
                    input.setCustomValidity('Não foi possivel buscar o CEP.')
                    return
                }
                input.setCustomValidity('')
                preencheCamposComCEP(data)
                return
            }
        )
    }
}

function preencheCamposComCEP(data) {
    const logradouro = document.querySelector('[data-tipo=logradouro]')
    const cidade = document.querySelector('[data-tipo=cidade]')
    const estado = document.querySelector('[data-tipo=estado]')

    logradouro.value = data.logradouro
    cidade.value = data.localidade
    estado.value = data.uf
}