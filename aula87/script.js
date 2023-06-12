function espera(msg, tempo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(msg.toUpperCase());
    }, tempo);
  });
}

const promises = [
  espera("Promise 1", 3000),
  espera("promise 2", 500),
  espera("promise 3", 1000),
];

// Promise.all(promises)
//   .then((valor) => console.log(valor))
//   .catch((erro) => console.error(erro));

Promise.race(promises)
  .then((valor) => console.log(valor))
  .catch((erro) => console.error(erro));
