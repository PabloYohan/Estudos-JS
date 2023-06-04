function mostraHora(){
  const hora = new Date();

  return hora.toLocaleTimeString('pt-Br', {hour12: false});
}


setInterval(() => console.log(mostraHora()), 1000);