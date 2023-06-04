const paragrafo = document.querySelector('.paragrafo');
const paragrafos = paragrafo.querySelectorAll('p');

const estilosBody = getComputedStyle(document.body);

for(let p of paragrafos){
  p.style.backgroundColor = estilosBody.backgroundColor; 
  p.style.color = 'blue';
};