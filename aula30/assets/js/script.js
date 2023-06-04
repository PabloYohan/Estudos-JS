const container = document.querySelector(".container");
const h1 = document.createElement("h1");
const h2 = document.createElement("h2");
const data = new Date();
const options = {
  dateStyle: "full",
  timeStyle: "short",
}
const diaSemana = [
  "Domingo",
  "Segunda",
  "Terça",
  "Quarta",
  "Quinta",
  "Sexta",
  "Sábado",
];
const diaSemanaTexto = diaSemana[data.getDay()];
h1.textContent = `${diaSemanaTexto}, ${data.toLocaleString("pt-Br")}`;
h2.textContent = `${data.toLocaleString("pt-BR", options)}`
container.appendChild(h1);
container.appendChild(h2);
