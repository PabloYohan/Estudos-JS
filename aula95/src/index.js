import "./assets/css/style.css";
import { geraCPF } from "./modules/geraCPF";

(function () {
  const result = document.querySelector(".result");

  document.addEventListener("click", (event) => {
    const target = event.target;
    if (target.classList.contains("gerador")) {
      let newCPF = geraCPF();
      result.innerHTML = newCPF;
    }
  });
})();
