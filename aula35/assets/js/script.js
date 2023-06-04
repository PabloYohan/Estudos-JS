function criaTag(tag) {
  return document.createElement(tag);
}
function inicia() {
  let tagV;
  const container = document.querySelector(".container");
  const elementos = [
    { tag: "p", text: "Frase 1" },
    { tag: "div", text: "Frase 2" },
    { tag: "footer", text: "frase 3" },
    { tag: "section", text: "frase 4" },
  ];

  for (let i = 0; i < elementos.length; i++) {
    tagV = criaTag(elementos[i].tag);
    tagV.innerHTML = elementos[i].text;
    container.appendChild(tagV);
  }
}
inicia();
