function addZero(valor) {
  return valor < 10 ? `0${valor}` : valor;
}
function getTimer(valor) {
  const time = new Date((valor * 1000) + 3 * 60 * 60 * 1000);
  const hours = addZero(time.getHours());
  const minutes = addZero(time.getMinutes());
  const seconds = addZero(time.getSeconds());
  return `${hours}:${minutes}:${seconds}`;
}

const timer = document.querySelector(".timer");
const start = document.querySelector(".start");
const pause = document.querySelector(".pause");
const reset = document.querySelector(".reset");
let seconds = 0;
let relogio;

start.addEventListener("click", (event) => {
  clearInterval(relogio);
  timer.style.color = "white";
  relogio = setInterval(() => {
    seconds++;
    timer.textContent = getTimer(seconds);
  }, 1000);
});

pause.addEventListener("click", (event) => {
  clearInterval(relogio);
  timer.style.color = "red";
});

reset.addEventListener("click", (event) => {
  clearInterval(relogio);
  timer.style.color = "white";
  timer.textContent = "00:00:00";
  seconds = 0;
});
