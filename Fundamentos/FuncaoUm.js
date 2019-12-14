//função sem retorno.
function ImprimirSoma(a,b) {
    console.log(a+b);
}

ImprimirSoma(2,3);
ImprimirSoma(25);
ImprimirSoma(2,3,4,5,6,7,8,9,10);
ImprimirSoma();

//função que retorna valor
function SomaComRetorno(a, b=0) {
    return a+b;
}

console.log(SomaComRetorno(2,3));
