function criaPessoa(nome, sobrenome, peso, altura) {
  return {
    nome,
    sobrenome,
    peso,
    altura,
    fala(assunto) {
      return `${this.nome} está falando ${assunto}`;
    },
    get imc() {
      return (this.peso / (this.altura * this.altura)).toFixed(2);
    },
  };
}

const pessoa1 = criaPessoa("João", "Pereira", 80, 1.8);
const pessoa2 = criaPessoa("Maria", "Pereira", 60, 1.6);

console.log(pessoa1.imc);
console.log(pessoa2.imc);
