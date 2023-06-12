const form = document.querySelector("form");

function criaErro(campo, text) {
  const div = document.createElement("div");
  div.classList.add("error");
  div.innerText = text;
  campo.insertAdjacentElement("afterend", div);
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let valido = true;
  for(let error of document.querySelectorAll(".error")){
    error.remove();
  }
  for(let campo of form.querySelectorAll(".validar")){
    let label = campo.previousElementSibling.innerText;
    if(!campo.value){
      criaErro(campo, `Campo "${label}" não pode estar vazio`);
      valido = false;
    }
    if(campo.classList.contains('usuario') && campo.value.trim().length < 3){
      criaErro(campo, `Campo "${label}" deve ter pelo menos 3 caracteres`);
      valido = false;
    }

    if(campo.classList.contains('usuario') && campo.value.trim().length > 12){
      criaErro(campo, `Campo "${label}" deve ter no máximo 12 caracteres`);
      valido = false;
    }

    if(campo.classList.contains('usuario') && !campo.value.match(/^[a-zA-Z0-9]+$/g)){
      criaErro(campo, `Campo "${label}" deve ter apenas números e/ou letras`);
      valido = false;
    }

    if(campo.classList.contains('cpf') && !validaCPF(campo.value)){
      criaErro(campo, `CPF inválido`);
      valido = false;
    }
    if(campo.classList.contains('senha') && campo.value.trim().length < 6){
      criaErro(campo, `Campo "${label}" deve ter no máximo 6 caracteres`);
      valido = false;
    }
    if(campo.classList.contains('senha') && campo.value.trim().length > 12){
      criaErro(campo, `Campo "${label}" deve ter no máximo 12 caracteres`);
      valido = false;
    }
    if(campo.classList.contains('confsenha') && campo.value !== document.querySelector(".senha").value){
      criaErro(campo, `As senhas devem ser iguais`);
      valido = false;
    }
  }
  if(valido){
    form.submit();
  }
});
