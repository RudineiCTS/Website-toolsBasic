const containerImg = document.getElementById('img-alvo')
const buttonChangeEnemy = document.getElementsByName('change-enemy');

let indexImgs = 0;
const vectorImg =['./enemys/ibis.png', './enemys/Rudjek.png']
let index= containerImg.getAttribute('indexImg');

function handleReturnChangeEnemy(){

  if(indexImgs > 0 ){
    indexImgs--;
    containerImg.setAttribute('src',vectorImg[indexImgs])
    console.log(vectorImg[indexImgs]);
  }
  
}

function handleNextChangeEnemy(){
  if(indexImgs >= 0 && indexImgs < vectorImg.length -1){
    indexImgs++;
    containerImg.setAttribute('src',vectorImg[indexImgs])
    console.log(vectorImg[index]);
  } 
}