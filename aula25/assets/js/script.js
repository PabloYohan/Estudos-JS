function calcImc(peso, altura) {
  const imc = peso / (altura * altura);
  return imc.toFixed(2);
}

function Init() {
  const form = document.querySelector(".form");
  const container = document.querySelector(".container");
  const msg = document.querySelector(".msg");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const peso = event.target.querySelector("#peso");
    const altura = event.target.querySelector("#altura");
    if (isNaN(peso.value) || isNaN(altura.value)) {
      msg.innerHTML =
        "<p style = 'background-color: red;'>Valor digitado invalido.</p>";
    } else {
      const imc = calcImc(peso.value, altura.value);
      if (imc < 18.5) {
        msg.innerHTML = `<p style = 'background-color: green;'>Seu IMC é de ${imc}(Abaixo do peso)</p>`;
      } else if (imc >= 18.5 && imc < 24.9) {
        msg.innerHTML = `<p style = 'background-color: green;'>Seu IMC é de ${imc}(Peso normal)</p>`;
      } else if (imc >= 25 && imc < 29.9) {
        msg.innerHTML = `<p style = 'background-color: green;'>Seu IMC é de ${imc}(Sobrepeso)</p>`;
      } else if (imc >= 30 && imc < 34.9) {
        msg.innerHTML = `<p style = 'background-color: green;'>Seu IMC é de ${imc}(Obesidade grau 1)</p>`;
      } else if (imc >= 35 && imc < 39.9) {
        msg.innerHTML = `<p style = 'background-color: green;'>Seu IMC é de ${imc}(Obesidade grau 2)</p>`;
      } else {
        msg.innerHTML = `<p style = 'background-color: green;'>Seu IMC é de ${imc}(Obesidade grau 3)</p>`;
      }
    }
  });
}
Init();
