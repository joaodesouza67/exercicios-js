function area(largura, altura) {
    const area = largura * altura
    if (area > 20) {
        console.log(`Área fora do parâmetro: ${area} m².`);
    }
    else {
        return area
    }
}

console.log(area(2, 2));
console.log(area(2));
console.log(area());
console.log(area(2, 3, 7, 23, 12));
console.log(area(5, 5));

