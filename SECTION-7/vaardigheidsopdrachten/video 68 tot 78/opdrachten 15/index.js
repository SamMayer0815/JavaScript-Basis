let button = document.getElementsByClassName("grid-container_item-1")[0];
let button2 = document.getElementsByClassName("grid-container_item-5")[0];
let button3 = document.getElementsByClassName("grid-container_item-3")[0];
const click = document.getElementsByClassName("grid-container_item-3")[0];
const click2 = document.getElementsByClassName("grid-container_item-6")[0];

button.onclick = function() {
  console.log("Hello World!")
}

button2.onclick = function() {
  for(let i = 0;i < 10;i++){
    console.log("JSC")
  }
  click2.innerHTML = "Hello World!"
}

button3.onclick = function() {
  click.innerHTML = "JSC";
}
