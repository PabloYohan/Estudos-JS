function Produto(nome, preco, estoque) {
  Object.defineProperties(this, {
    nome: {
      enumerable: true,
      value: nome,
      writable: true,
      configurable: false,
    },
    preco: {
      enumerable: true,
      value: preco,
      writable: true,
      configurable: false,
    },
  });
  
  Object.defineProperty(this, "estoque", {
    enumerable: true,
    value: estoque,
    writable: false,
    configurable: false,
  });
}

const p1 = new Produto("Camiseta", 20, 3);

console.log(p1);
