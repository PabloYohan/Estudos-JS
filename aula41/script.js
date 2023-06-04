function maior(a, b){
  if (isNaN(a) || isNaN(b)){
    return 'valores invalidos';
  } else if (a > b){
    return a;
  }else if (a < b){
    return b;
  }else{
    return 'valores iguais';
  }
}

console.log(maior(3, 3));