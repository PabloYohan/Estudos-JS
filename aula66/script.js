const numeros = [5, 50, 80, 1, 2, 3, 5, 7, 11, 15, 22, 27];

const dobro = numeros.map((valor) => valor * 2);

console.log(dobro);

const pessoas = [
  { nome: "Luiz", idade: 62 },
  { nome: "Maria", idade: 23 },
  { nome: "Eduardo", idade: 55 },
  { nome: "Leticia", idade: 19 },
  { nome: "Gabriel", idade: 32 },
  { nome: "Wallace", idade: 47 },
];

const nomes = pessoas.map((valor) => valor.nome);
const idades = pessoas.map((obj) => {
  const newObj = {...obj};
  delete newObj.nome;
  return newObj;
});

const newPessoas = pessoas.map((obj, index) =>
  Object.assign({ id: index }, obj)
);
console.log(nomes);
console.log(idades);
console.log(newPessoas);
console.log(pessoas);
