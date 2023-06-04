function listaTarefa() {
  const form = document.querySelector(".form");
  const ul = document.querySelector(".lista");

  function criaLi() {
    return document.createElement("li");
  }

  function criaBotao(li) {
    li.innerHTML += " ";
    const btn = document.createElement("button");
    btn.innerText = "Apagar";
    btn.setAttribute("class", "remove");
    li.appendChild(btn);
  }

  function criaTarefa(texto) {
    const li = criaLi();
    li.innerText = texto;
    ul.appendChild(li);
    criaBotao(li);
    salvaTarefa();
  }
  function salvaTarefa() {
    const tarefas = document.querySelectorAll("li");
    const vetTarefas = [];

    for (let tarefa of tarefas) {
      let tarefaText = tarefa.innerText;
      tarefaText = tarefaText.replace("Apagar", "").trim();
      vetTarefas.push(tarefaText);
    }
    
    const tarefaJSON = JSON.stringify(vetTarefas);
    localStorage.setItem("tarefas", tarefaJSON);
  }

  function addTarefasSalvas() {
    const tarefas = localStorage.getItem("tarefas");
    const vetTarefas = JSON.parse(tarefas);

    for (let tarefa of vetTarefas) {
      criaTarefa(tarefa);
    }
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!form.querySelector("#tarefa").value) return;
    criaTarefa(form.querySelector("#tarefa").value);
    form.reset();
  });
  document.addEventListener("click", (event) => {
    if (event.target.classList.contains("remove")) {
      event.target.parentElement.remove();
      salvaTarefa();
    }
  });
  addTarefasSalvas();
}
listaTarefa();
