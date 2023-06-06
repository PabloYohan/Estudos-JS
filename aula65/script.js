const numeros = [5, 50, 80, 1, 2, 3, 5, 7, 11, 15, 22, 27];
const novo = [];
for (let numero of numeros) {
  if (numero > 10) novo.push(numero);
}
const novo2 = numeros.filter((valor) => valor > 10);

const pessoas = [
  { nome: "Luiz", idade: 62 },
  { nome: "Maria", idade: 23 },
  { nome: "Eduardo", idade: 55 },
  { nome: "Leticia", idade: 19 },
  { nome: "Gabriel", idade: 32 },
  { nome: "Wallace", idade: 47 },
];

const pessoas2 = pessoas.filter((valor) => valor.idade > 50);
const pessoas3 = pessoas.filter((valor) => valor.nome.length >= 5);
const pessoas4 = pessoas.filter((valor) => valor.nome.endsWith('a'));

console.log(pessoas2);
console.log(pessoas3);
console.log(pessoas4);
