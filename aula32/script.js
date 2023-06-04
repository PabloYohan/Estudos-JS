const pessoa = {
  nome: "Ana",
  idade: 25,
  endereco: { rua: "Av. Brasil", numero: 1 },
};

const {
  nome: n = "",
  idade: i = "",
  endereco: { rua: r = "", numero: no = "" },
} = pessoa;

console.log(n, i, r, no);
