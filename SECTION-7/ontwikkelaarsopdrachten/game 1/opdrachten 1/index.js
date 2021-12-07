let button = document.getElementsByClassName("button-answer")[0];


const opp = ["+","*","/","-"]




button.onclick = function randomOperator(){

  randomNum = Math.floor(Math.random() * opp.length)
  randomNumber1 = opp[randomNum]
  document.getElementsByClassName("operator")[0].innerHTML = randomNumber1; // random opperator
 
  if(opp[randomNum] == opp[0]){
    randomNum1 = Math.floor(Math.random() * 49)+1
    randomNum2 = Math.floor(Math.random() * 49)+1
    document.getElementsByClassName("num1")[0].innerHTML = randomNum1
    document.getElementsByClassName("num2")[0].innerHTML = randomNum2 // voor +
  }else if(opp[randomNum] == opp[1]){
    randomNum1 = Math.floor(Math.random() * 9)+1
    randomNum2 = Math.floor(Math.random() * 9)+1
    document.getElementsByClassName("num1")[0].innerHTML = randomNum1
    document.getElementsByClassName("num2")[0].innerHTML = randomNum2 // voor *
  }else if(opp[randomNum] == opp[2]){
    randomNum1 = Math.floor(Math.random() * 19)+1
    randomNum2 = Math.floor(Math.random() * 9)+1
    let number1 = randomNum2 * randomNum1;
    document.getElementsByClassName("num1")[0].innerHTML = number1
    document.getElementsByClassName("num2")[0].innerHTML = randomNum2 // voor /
  }else if(opp[randomNum] ==opp[3]){
    randomNum1 = Math.floor(Math.random() * 24)+26
    randomNum2 = Math.floor(Math.random() * 24)+1
    document.getElementsByClassName("num1")[0].innerHTML = randomNum1
    document.getElementsByClassName("num2")[0].innerHTML = randomNum2 // voor -
  }
}

