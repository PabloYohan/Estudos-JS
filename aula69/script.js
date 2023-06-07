const pessoa = {
  nome: 'Ana',
  idade: 25,
  falarNome : function(){
    console.log(`${this.nome}`);
  }
}

const valor = 'nome';
console.log(pessoa[valor]);
pessoa.falarNome();