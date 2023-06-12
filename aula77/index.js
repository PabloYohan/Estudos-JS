const cpf = "705.484.450-52";

function transformaCPF(cpf) {
  const aux = cpf.split("-");
  const numeros = aux[0].replace(/\D+/g, '').split("");
  const vetNum = numeros.map((v) => parseInt(v));
  return vetNum;
}

function juntaCPF(cpf, digito1, digito2) {
  const aux = `${cpf[0]}${cpf[1]}${cpf[2]}`;
  const aux1 = `${cpf[3]}${cpf[4]}${cpf[5]}`;
  const aux2 = `${cpf[6]}${cpf[7]}${cpf[8]}`;
  return `${aux}.${aux1}.${aux2}-${digito1}${digito2}`;
}

function sequenciaCPF(cpf){
  const aux = cpf.replace(/\D+/g, '');
  const aux2 = aux[0].repeat(aux.length);
  return aux === aux2;
}

function achaPrimeiroDigito(cpf) {
  let aux = 10;
  let digito1 = cpf.reduce((acc, valor) =>{
    acc += aux * valor;
    aux -= 1;
    return acc;
  }, 0);

  digito1 = 11 - (digito1 % 11);
  if (digito1 > 9) return 0;
  return digito1;
}

function achaSegundoDigito(cpf){
  let aux = 11;
  let digito2 = cpf.reduce((acc, valor) =>{
    acc += aux * valor;
    aux -= 1;
    return acc;
  }, 0);

  digito2 = 11 - (digito2 % 11);
  if (digito2 > 9) return 0;
  return digito2;
}

function validaCPF(cpf) {
  if(typeof cpf === "undefined") return false;
  if(cpf.length !== 14) return false;
  if(sequenciaCPF(cpf)) return false;

  const num = transformaCPF(cpf);
  const primeiroDigito = achaPrimeiroDigito(num);

  const num2 = [...num, primeiroDigito];
  const segundoDigito = achaSegundoDigito(num2);

  const cpf2 = juntaCPF(num, primeiroDigito, segundoDigito);

  if (cpf !== cpf2) return false;

  return true;
}
console.log(validaCPF("705.484.450-52"));
