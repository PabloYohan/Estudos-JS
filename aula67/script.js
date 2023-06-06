const numeros = [5, 50, 80, 1, 2, 3, 5, 7, 8, 11, 15, 22, 27];

const total = numeros.reduce((acc, val)=> acc+=val, 0);

console.log(total);

const pessoas = [
  { nome: "Luiz", idade: 62 },
  { nome: "Maria", idade: 23 },
  { nome: "Eduardo", idade: 65 },
  { nome: "Leticia", idade: 19 },
  { nome: "Gabriel", idade: 32 },
  { nome: "Wallace", idade: 47 },
];

const maiorIdade = pessoas.reduce((acc, val)=>{
  if(acc.idade > val.idade){
    return acc;
  }
  return val;
});

console.log(maiorIdade);