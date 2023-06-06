const numeros = [5, 50, 80, 1, 2, 3, 5, 7, 8, 11, 15, 22, 27];

// soma do dobro de todos números pares

const pares = numeros.filter((valor) => valor % 2 === 0);

const dobro = pares.map((valor) => valor * 2);

const soma = dobro.reduce((acc, valor) => (acc + valor), 0);

console.log(soma);
