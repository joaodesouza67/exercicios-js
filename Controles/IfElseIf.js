Number.prototype.entre = function (inicio, fim) {
    return this >= inicio && this <= fim
}

const imprimirResultado = function (nota){
    if (nota.entre(8,10)){
        console.log('Quadro de Honra!!!');
    }
    else if (nota.entre(6,7.99)){
        console.log('Aprovado!!!')
    }
    else if(nota.entre(4,5,99)){
        console.log('Recuperação!!!')
    }
    else if(nota.entre(0,3.99)){
        console.log('Reprovado!!!')
    }
    else{
        console.log('Nota inválida!!!')
    }
}

imprimirResultado(10)
imprimirResultado(6.5)
imprimirResultado(4.2)
imprimirResultado(2)
imprimirResultado(-1)
imprimirResultado(11)
