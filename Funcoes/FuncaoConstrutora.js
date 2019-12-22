function carro(velocidadeMaxima = 200, delta = 5) {
    // atributo privado.
    let velocidadeAtual = 0;

    // método público.
    this.acelerar = function () {
        if (velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta;
        }
        else {
            velocidadeAtual = velocidadeMaxima;
        }
    }

    // método público.
    this.getVelocidadeAtual = function () {
        return velocidadeAtual;
    }
}

const uno = new carro
uno.acelerar();
console.log(uno.getVelocidadeAtual());

const Ferrari = new carro(350, 20);
Ferrari.acelerar();
Ferrari.acelerar();
Ferrari.acelerar();
Ferrari.acelerar();
Ferrari.acelerar();
Ferrari.acelerar();
Ferrari.acelerar();
Ferrari.acelerar();
Ferrari.acelerar();
Ferrari.acelerar();
Ferrari.acelerar();
Ferrari.acelerar();
Ferrari.acelerar();
Ferrari.acelerar();
Ferrari.acelerar();
Ferrari.acelerar();
Ferrari.acelerar();
Ferrari.acelerar();
Ferrari.acelerar();
console.log(Ferrari.getVelocidadeAtual());
