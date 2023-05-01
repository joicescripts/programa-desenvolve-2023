// *Crie uma função que receba uma string como parâmetro e retorne a mesma string invertida.

function inverterString(texto) {
        var novoTexto = "";
        for (var i = texto.length - 1; i >= 0; i--) {
          novoTexto += texto[i];
        }
        return novoTexto;
      }
      
      console.log(inverterString("javascript")); // "tpircsavaj"



// outra forma : // function recebeTexto(palavra) {
//     // transformando string em array
//     let transformaTexto = palavra.split("")
//     console.log(transformaTexto);

//     // inverte o array criado
//     let inverteArray = transformaTexto.reverse();
//     console.log(inverteArray);

//     // transforma novamente em string
//     let textoInvertido = inverteArray.join("");
//     return textoInvertido
// }
// console.log(recebeTexto('joice'));






