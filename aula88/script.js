function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function espera(msg, tempo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof msg !== "string") {
        reject("Invalid message");
        return;
      }
      resolve(msg.toUpperCase());
    }, tempo);
  });
}
// espera("Fase 1", randomNumber(1000, 4000))
//   .then((msg) => {
//     console.log(msg);
//     return espera("Fase 2", randomNumber(1000, 4000));
//   })
//   .then((msg) => {
//     console.log(msg);
//     return espera("Fase 3", randomNumber(1000, 4000));
//   })
//   .then((msg) => console.log(msg))
//   .catch((err) => console.error(err));


async function execute(){
  try{
    const fase1 = await espera("Fase 1", randomNumber(1000, 4000));
    console.log(fase1);
    const fase2 = await espera("Fase 2", randomNumber(1000, 4000));
    console.log(fase2);
    const fase3 = await espera("Fase 3", randomNumber(1000, 4000));
    console.log(fase3);
  }catch(err){
    console.error(err);
  }
}

execute();