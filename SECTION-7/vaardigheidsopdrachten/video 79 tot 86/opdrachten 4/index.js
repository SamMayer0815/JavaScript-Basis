document.getElementsByClassName("grid-container_item-a")[0].addEventListener("click", geklikt);
document.getElementsByClassName("grid-container_item-b")[0].addEventListener("click", geklikt1);
document.getElementsByClassName("grid-container_item-c")[0].addEventListener("click", geklikt2);

function geklikt(){
  a = document.getElementsByClassName("grid-container_item-a")[0].innerHTML
  console.log(a)
}


function geklikt1(){
  a = document.getElementsByClassName("grid-container_item-b")[0].innerHTML
  console.log(a)
}

function geklikt2(){
  a = document.getElementsByClassName("grid-container_item-c")[0].innerHTML
  console.log(a)
}

