let score = 0;
let totaalPersoon = 0; 



randomNumbers = function(){
   
  randomNum = Math.round(Math.random() * 49)+1
  document.getElementsByClassName("score")[0].innerHTML = randomNum;

  for(let i = 1;i <= 8;i++){
    randomNum = Math.round(Math.random() * 14)+1
    gridItem = "grid-item-" + i;
    document.getElementById(gridItem).innerHTML = randomNum;     // kiest random nummer
  }                                                              
}

  document.addEventListener("click", function Numbers(event){

   if(event.target.className == "grid-items"){
    if(event.target.innerHTML != "-" ){
      totaalPersoon += parseInt(event.target.innerHTML)
   console.log(totaalPersoon)
   event.target.innerHTML = "-"                                 // zet - als op is geklikt
    }
  }
   if(event.target.className == "done-button"){
    if(totaalPersoon == parseInt(document.getElementsByClassName("score")[0].innerHTML)){  // geeft punt als goed is
      score += 1;
      console.log(score) 
      randomNumbers()
      totaalPersoon = 0;
      }
  }
 })

document.getElementsByClassName("cant-be-done")[0].onclick = function(){
 randomNumbers()
 totaalPersoon = 0;
}


document.querySelector("body").onload = randomNumbers(); // eerste keer laden