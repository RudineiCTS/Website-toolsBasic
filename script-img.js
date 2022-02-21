const containerImg = document.getElementById('img-alvo')
const buttonChangeEnemy = document.getElementsByName('change-enemy');

let indexImgs =0;
const vectorImg =['ibis.png', 'Rudjek.png']

function handleChangeEnemy(){
  let index= containerImg.getAttribute('indexImg');
  index++;
  if(index !== indexImgs)
  containerImg.setAttribute('src',vectorImg[index])
}