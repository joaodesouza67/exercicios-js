//armazanando a função em uma variavel
const ImprimirSoma = function (a, b) {
    console.log(a+b);
}

ImprimirSoma(2,3);


//armazanenadou ma função arrow em uma variavel
const Soma = (a, b) => {
    return a + b;
}

console.log(Soma(2, 3));

//retoron implicito
const subtracao = (a, b) => a - b;

console.log(subtracao(2,3));

const Imprimir2 = a => console.log(a);

Imprimir2('Legalzinho!!!');

