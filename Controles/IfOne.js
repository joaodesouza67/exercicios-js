function soBoaNoticia(nota) {
    if (nota >= 7) {
        console.log('Aprovado!')
    }

}

soBoaNoticia(8);
soBoaNoticia(2);

function soSeForVerdade(valor) {
    if (valor) {
        console.log('É verdade...' + valor)
    }
}


soSeForVerdade();
soSeForVerdade(null);
soSeForVerdade(undefined);
soSeForVerdade('');
soSeForVerdade(NaN);
soSeForVerdade(0);
soSeForVerdade(-1);
soSeForVerdade(' ');
soSeForVerdade('?');
soSeForVerdade([]);
soSeForVerdade([1,2,3]);
soSeForVerdade({});