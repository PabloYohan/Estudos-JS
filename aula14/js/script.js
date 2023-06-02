let numero = Number(prompt("Digite um número: "));
const valor = document.getElementById("valor");
const app = document.getElementById("app");

valor.innerHTML = `${numero}`;
app.innerHTML += `<p>Raiz quadrada: ${numero ** (1/2)}</p>`;
app.innerHTML += `<p>${numero} é inteiro: ${Number.isInteger(numero)}</p>`;
app.innerHTML += `<p>${numero} é NaN: ${isNaN(numero)}</p>`;
app.innerHTML += `<p>Arredondamento para baixo: ${Math.floor(numero)}</p>`;
app.innerHTML += `<p>Arredondamento para cima: ${Math.ceil(numero)}</p>`;
app.innerHTML += `<p>Duas casas decimais: ${numero.toFixed(2)}</p>`;
