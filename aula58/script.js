function Pessoa(nome, sobrenome){
  this.nome = nome;
  this.sobrenome = sobrenome;

  this.metodo = ( ) => console.log(`${this.nome}: sou um método`); 
}
const pessoa1 = new Pessoa('Pablo', 'Yohan');
pessoa1.metodo();
console.log(pessoa1);