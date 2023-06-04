const dataInicio = new Date(0);
console.log(dataInicio.toString()); //Timestamp unix

// const dataAtual = new Date();
// console.log(dataAtual); //Valor atual

// const dataPers = new Date('2021-04-21 21:30:00');
// console.log(dataPers); 

function dateBrazil(date){
  const data = new Date(date);
  const dia = data.getDate();
  const mes = data.getMonth() + 1;
  const ano = data.getFullYear();
  const hora = data.getHours();
  const minuto = data.getMinutes();
  const segundo = data.getSeconds();
  return `${dia}/${mes}/${ano} ${hora}:${minuto}:${segundo}`;
}

console.log(dateBrazil(dataInicio));