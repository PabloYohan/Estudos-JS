function Produto(nome, preco, estoque) {
  this.nome = nome;
  this.preco = preco;
  
  Object.defineProperty(this, "estoque", {
    enumerable: true,
    configurable: false,
    get: () => estoque,
    set: function(value) {
      if(typeof value !== "number"){
        return;
      }
      this.estoque = value;
    },
  });
}

const p1 = new Produto("Camiseta", 20, 3);
console.log(p1.estoque);