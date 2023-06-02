function inicia(){
  const form = document.querySelector('#formulario');
  const resultado = document.querySelector('.resultado');
  const pessoas = [];

  function evento(e) {
    e.preventDefault();
    const nome = document.querySelector('.nome');
    const sobrenome = document.querySelector('.sobrenome');
    const peso = document.querySelector('.peso');
    const altura = document.querySelector('.altura');
    pessoas.push({
      nome : nome.value, 
      sobrenome : sobrenome.value,
      peso:peso.value,
      altura : altura.value
    });
    console.log(pessoas);
    console.log(nome.value,sobrenome.value,peso.value,altura.value);
    resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} ${peso.value} ${altura.value}</p>`;
  };

  form.addEventListener('submit', evento);
}
inicia();