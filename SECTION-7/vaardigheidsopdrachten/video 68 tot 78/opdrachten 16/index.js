let button = document.getElementsByClassName("grid-container_item-1")[0];
let click = document.getElementsByClassName("grid-container_item-2")[0];

let a = 0;
let i = 0;
button.onclick = function() {
click.innerHTML = ""+a
i++;
a = a + (i * i)

}


