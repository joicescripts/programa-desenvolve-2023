const controle = document.querySelectorAll("[data-controle]");
const estatisticas = document.querySelectorAll("[data-estatistica");
const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

controle.forEach( (elemento) => { 
    elemento.addEventListener('click', (evento) => {
       //valor do atributo data-controle do botão  // elemento pai
       manipulaDados(evento.target.dataset.controle, evento.target.parentNode);
       atualizaEstatisticas(evento.target.dataset.peca, evento.target.dataset.controle); //professor não tinha adicionado evento.target.dataset.controle
    })
})

function manipulaDados(operacao, controle) {

    const peca = controle.querySelector("[data-contador]");

    if(operacao === "-") {
        peca.value = parseInt(peca.value) - 1;
    }else {
        peca.value = parseInt(peca.value) + 1;
    }

}

// feito por um aluno
function atualizaEstatisticas(peca, operacao) {
    if(operacao === "+") {
      estatisticas.forEach( (elemento) => {
        elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica];
      })
    } else {
      estatisticas.forEach( (elemento) => {
        elemento.textContent = parseInt(elemento.textContent) - pecas[peca][elemento.dataset.estatistica];
      })
    }
  }

// feito pelo professor

// function atualizaEstatisticas(peca) {
//     console.log(pecas[peca]);

//     estatisticas.forEach( (elemento) => {
//         elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica];
//     })
// }