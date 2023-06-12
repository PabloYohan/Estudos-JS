class DispositivoEletronico {
  constructor(nome) {
    this.nome = nome;
    this.ligado = false;
  }

  ligar() {
    if (this.ligado) return;
    this.ligado = true;
  }

  desligar() {
    if (!this.ligado) return;
    this.ligado = false;
  }
}

class Smartphone extends DispositivoEletronico {
  constructor(nome, cor) {
    super(nome);
    this.cor = cor;
  }
}

const d1 = new Smartphone("Iphone", "Branco");
console.log(d1);
d1.ligar();
console.log(d1);
