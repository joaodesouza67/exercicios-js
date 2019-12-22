console.log(soma(4,3)); // pode ser usada a qualquer tempo dentro do código.


// function declaration.
function soma(x, y) {
    return x + y;
};

// function expression.
const sub = function (x, y) {
    return x - y;
};
console.log(sub(4,3)); //só pode ser usada após a declaração.

// named function expression.
const mult = function mult(x, y) {
    return x * y;
};
console.log(mult(4,3));
