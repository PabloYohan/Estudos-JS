const nome = "Pablo Yohan";
const sobrenome = "Santos Dias";
const idade = 20;
const peso = 60;
const alturaEmM = 1.77;

let imc = peso/(alturaEmM*alturaEmM);

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg`);
console.log(`tem ${alturaEmM} de altura e seu IMC é ${imc}`);