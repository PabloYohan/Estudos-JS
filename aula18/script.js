const pessoa = (nome, idade) =>{
  return {
    nome, idade
  }
};

const pessoa1 = pessoa("Pablo", 20);
const pessoa2 = pessoa("Stephany", 19)

console.log(pessoa1.nome, pessoa2.nome);
console.log(pessoa1.idade, pessoa2.idade);