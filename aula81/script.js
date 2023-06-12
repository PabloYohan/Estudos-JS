const _velocidade = Symbol("Velocidade");
class Carro {
  constructor(nome) {
    this.nome = nome;
    this[_velocidade] = 0;
  }

  set velocidade(value) {
    if (typeof value !== "number") return;
    if (value >= 100 || value <= 0) return;
    this[_velocidade] = value;
  }

  get velocidade() {
    return this[_velocidade];
  }

  acelerar() {
    if (this[_velocidade] > 100) return;
    this[_velocidade]++;
  }

  frear() {
    if (this[_velocidade] <= 0) return;
    this[_velocidade]--;
  }
}

const c1 = new Carro("Fusca");
console.log(c1);

c1.acelerar();
console.log(c1);
