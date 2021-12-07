let button = document.getElementsByClassName("grid-container_item-1")[0];
let click = document.getElementsByClassName("image")[0];

let images = [
 '0.jfif',
 '1.jfif',
 '2.jfif',
 '3.jfif',
 '4.jfif',
 '5.jfif',
 '6.jfif',
 '7.jfif',
 '8.jfif',
 '9.jfif'
]

button.onclick = function() {
 random = Math.floor(Math.random() * images.length)

 selected_img = images[random]
 document.getElementsByClassName("image")[0].src =  `./img/${selected_img}`
}