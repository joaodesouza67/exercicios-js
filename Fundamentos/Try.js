function tratandoErroeLancar(erro) {
    // throw new Error('.....!');
    // throw 10;
    // throw true;
    // throw 'Mensagem de erro!!!';
    throw {
        name: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function imprimirNomeGritado(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!!');
    }
    catch (e) {
        tratandoErroeLancar(e);
    }
    finally{
        console.log('Finalmente!!!');
    }
}

const obj = { name: 'Roberto' };
imprimirNomeGritado(obj);