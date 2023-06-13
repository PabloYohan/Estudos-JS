import { String } from "core-js";
import "./validador";
import {
  achaPrimeiroDigito,
  achaSegundoDigito,
  juntaCPF,
  transformaCPF,
} from "./validador";

function geraCPF() {
  function randomCPF(min = 100000000, max = 999999999) {
    const valor = String(Math.floor(Math.random() * (max - min) + min));
    return transformaCPF(valor);
  }
  const newWithoutDigit = randomCPF();
  const digit1 = achaPrimeiroDigito(newWithoutDigit);
  const newWithOneDigit = [...newWithoutDigit, digit1];
  const digit2 = achaSegundoDigito(newWithOneDigit);

  return juntaCPF(newWithoutDigit,digit1, digit2);
}

export { geraCPF };
