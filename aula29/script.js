const data = new Date();

const getDayWeakText = (data) => {
  let dia = data.getDay();
  switch (dia){
    case 0:
      return 'Domingo';
    case 1:
      return 'Segunda';
    case 2:
      return 'Terça';
    case 3:
      return 'Quarta';
    case 4:
      return 'Quinta';
    case 5:
      return 'Sexta';
    case 6:
      return 'Sábado';
  }
}
console.log(getDayWeakText(data));