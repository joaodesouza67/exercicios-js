let valor; //não inicializada
console.log(valor);

valor = null; //ausencia de valor
console.log(valor);
//console.log(valor.toString); <- não é possivel acessar atributos a partir de valores nulos.

const produto = {};
console.log(produto);
console.log(produto.preco);

produto.preco = 3.50;
console.log(produto.preco);

produto.preco = undefined; //evite atribuir undefined.
console.log(produto.preco);
// delete produto.preco;
console.log(produto.preco);


produto.preco = null //vazio.
console.log(produto.preco);
console.log(!!produto.preco);
console.log(produto);
