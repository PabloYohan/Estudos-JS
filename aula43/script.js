const fizzBuzz = (valor) => {
  if(isNaN(valor)){
    return valor;
  }else if(valor % 3 === 0 && valor % 5 === 0){
    return 'FizzBuzz';
  }else if(valor % 3 === 0){
    return 'Fizz';
  }else if(valor % 5 ===0){
    return 'Buzz';
  }else {
    return valor;
  }
}
let i = 0;
while(i < 101){
  console.log(i, fizzBuzz(i));
  i++;
}