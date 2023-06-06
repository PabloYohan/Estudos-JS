function funcao() {
  let soma = 0;
  for (let n of arguments) {
    soma += n;
  }
  console.log(soma);
}

function soma(a, b = 2, c = 4) {
  console.log(a + b + c);
}

soma(1);

function somaTudo(...args) {
  soma = 0;
  for (let numeros of args) {
    soma += numeros;
  }
  console.log(soma);
}
somaTudo(20, 30, 40, 50);
