class ValidadorCPF {
  constructor(cpf) {
    const aux = cpf.split("-");
    const numeros = aux[0].replace(/\D+/g, "").split("");
    const vetNum = numeros.map((v) => parseInt(v));
    this.cpflimpo = vetNum;
  }
}
