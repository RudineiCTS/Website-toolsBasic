const containerImg = document.getElementById('img-alvo')
const buttonChangeEnemy = document.getElementsByName('change-enemy');

let indexImgs =0;
const vectorImg =['./enemys/ibis.png', './enemys/Rudjek.png']

function handleChangeEnemy(){
  let index= containerImg.getAttribute('indexImg');
  index++;
  console.log(index);
  if(index !== indexImgs)
  containerImg.setAttribute('src',vectorImg[index])
  console.log(vectorImg[index]);
}