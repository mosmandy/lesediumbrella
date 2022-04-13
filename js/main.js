const catpr = document.getElementsByClassName("catpr");
const catpl = document.getElementsByClassName("catpl");
window.addEventListener('scroll', checkanimation);
checkanimation();
function checkanimation(){
  const trigger = window.innerHeight/6*4;
  for (i=0; i<catpr.length; i++){
            const top = catpr[i].getBoundingClientRect().top;
            if (trigger > top){
              catpr[i].classList.add('show_content');
            }else{
              catpr[i].classList.remove('show_content');
          }
  }
  for (i=0; i<catpl.length; i++){
            const top = catpl[i].getBoundingClientRect().top;
            if (trigger > top){
              catpl[i].classList.add('show_content');
            }else{
              catpl[i].classList.remove('show_content');
          }
  }
}