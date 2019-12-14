// par nome X valor
const saudacao = 'Opa!'; // contexto lexico 1 

function exec() {
    const saudacao = "Falaaa!"; // contexto lexico 2
    return saudacao;
}

// objetos são grupos aninhados de pares x valor
const cliente = {
    nome: "Pedro",
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua Muito Legal',
        numero: 123
    }
}

console.log(saudacao);
console.log(exec());
console.log(cliente);