function Produto(nome, preco) {
  this.nome = nome;
  this.preco = preco;
}

Produto.prototype.desconto = function (valor) {
  this.preco -= valor;
};

Produto.prototype.aumento = function (valor) {
  this.preco += valor;
};

function Camiseta(nome, preco, cor) {
  Produto.call(this, nome, preco);
  this.cor = cor;
}
function Caneca(nome, preco, material) {
  Produto.call(this, nome, preco);
  this.material = material;
}
Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;

Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta;

const p = new Produto("Gen", 11);
const c = new Camiseta("Camiseta", 200, "preto");
const c2 = new Caneca("Caneca", 10, "Plástico");

console.log(p);
c.aumento(10);
console.log(c);
console.log(c2);
