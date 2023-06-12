function randomNumber(max, min) {
  return Math.floor(Math.random() * (max - min) + min);
}

function espera(msg, tempo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(msg);
    }, tempo);
  });
}

espera("Executando...", randomNumber(1000, 4000))
  .then((msg) => {
    console.log(msg);
    return espera("Executando2...", randomNumber(1000, 4000));
  })
  .then((msg) => {
    console.log(msg);
    return espera("Executando3...", randomNumber(1000, 4000));
  })
  .then((msg) => console.log(msg));
