let button = document.getElementsByClassName("button-answer")[0];
document.getElementsByClassName("score-board")[0].innerHTML = "Score 0"
const opp = ["+","*","/","-"]
puntenTotaal = 0;
let tiende = 0;
let seconden = 0;
let minuut = 0;
let foutTotaal = 0;
let game = false

randomOperator = function (){ // getallen / operator functie

  randomNum = Math.floor(Math.random() * opp.length)
  randomNumber1 = opp[randomNum]
  document.getElementsByClassName("operator")[0].innerHTML = randomNumber1; // random opperator

  if(opp[randomNum] == opp[0]){
    randomNum1 = Math.floor(Math.random() * 99)+1
    randomNum2 = Math.floor(Math.random() * 99)+1
    document.getElementsByClassName("num1")[0].innerHTML = randomNum1
    document.getElementsByClassName("num2")[0].innerHTML = randomNum2 // voor +
    answer = randomNum1 + randomNum2;
  }else if(opp[randomNum] == opp[1]){
    randomNum1 = Math.floor(Math.random() * 9)+1
    randomNum2 = Math.floor(Math.random() * 9)+1
    document.getElementsByClassName("num1")[0].innerHTML = randomNum1
    document.getElementsByClassName("num2")[0].innerHTML = randomNum2 // voor *
    answer = randomNum1 * randomNum2;
  }else if(opp[randomNum] == opp[2]){
    randomNum1 = Math.floor(Math.random() * 10)+1
    randomNum2 = Math.floor(Math.random() * 3)+1
    document.getElementsByClassName("num1")[0].innerHTML = randomNum1
    document.getElementsByClassName("num2")[0].innerHTML = randomNum2 // voor /
    answer = randomNum1 / randomNum2;
  }else if(opp[randomNum] ==opp[3]){
    randomNum1 = Math.floor(Math.random() * 99)
    randomNum2 = Math.random() * (randomNum1 - 1)
    randomNum2 = parseFloat(randomNum2.toFixed(0))
    document.getElementsByClassName("num1")[0].innerHTML = randomNum1
    document.getElementsByClassName("num2")[0].innerHTML = randomNum2 // voor -
    answer = randomNum1 - randomNum2;
  }

}

document.querySelector("body").onload = randomOperator(); // eerste keer laden
document.getElementsByClassName("input-answer")[0].onclick = function(){
document.querySelector(".input-answer").style.backgroundColor = "white"}
document.querySelector(".button-answer").onclick = function(){

  answerInput = document.getElementsByClassName("input-answer")[0].value // ingetypte antwoord
  answer = parseFloat(answer.toFixed(1))

 if(answerInput+"" == answer+""){
   puntenTotaal += 1;
    document.getElementsByClassName("score-board")[0].innerHTML = "Score " + puntenTotaal // checks answer
    randomOperator();
    
  } else{
    document.getElementsByClassName("input-answer")[0].style.backgroundColor = "red"
   foutTotaal ++;
 }

 document.getElementsByClassName("input-answer")[0].value = ""

 if(puntenTotaal == "3"){    // check of game klaar is
 game = false
   document.getElementsByClassName("score-board")[0].innerHTML = "Score 0"
   modal.style.display = "block";

   document.querySelector(".endScore").innerHTML =
   "- " +  puntenTotaal + " vragen goed beantwoord";
          if (foutTotaal == 0) {
            document.querySelector(".endMistake").innerHTML =
            "- " + "Je hebt geen fouten gemaakt";
          } else if (foutTotaal == 1) {
            document.querySelector(".endMistake").innerHTML =
            "- " +  foutTotaal + " vraag fout beantwoord";
          } else {
            document.querySelector(".endMistake").innerHTML =
            "- " + foutTotaal + " vragen fout beantwoord";
          }
         if(minuut == 0){
          document.querySelector(".tijd").innerHTML = 
          "- in totaal " + seconden + " seconden"
         }else if(minuut == 1){
          document.querySelector(".tijd").innerHTML = 
          "- in totaal " + minuut + " minuut en " + seconden + " seconden"
         }else( document.querySelector(".tijd").innerHTML = 
         "- in totaal " + minuut + " minuten en " + seconden + " seconden")
puntenTotaal = 0;
seconden = 0;
minuut = 0;
 }  
}

let modal = document.querySelector("#myModal");

    document.querySelectorAll(".playAgain")[0].onclick, modal.onclick = function () {
      modal.style.display = "none";
      score = 0;
      mistake=0;
    };

setInterval(function(){
  seconden++
  if(seconden == 60){
    minuut++  
    seconden = 0;
  }},1000);
