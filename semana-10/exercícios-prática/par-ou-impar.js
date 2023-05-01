// *Crie uma função que receba um número como parâmetro e retorne true se ele for par e false se for ímpar.

function recebeNumeros (x) {
    if(x % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

console.log (recebeNumeros(7))