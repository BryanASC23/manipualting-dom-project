let Pbutton = document.getElementById("p-button"); //access to the paragraph button
let imgButton = document.getElementById("img-button"); //access to the images button

let Pdiv = document.getElementById("p-div");
let imgDiv = document.getElementById("img-div"); 

//when the image button is clicked
imgButton.onclick = function() {
let newImg = document.createElement("img"); // creating new image

newImg.src = "/images/porsche-918-spyder-car.png";
newImg.style.width = "200px";
newImg.style.height = "133px";
Pdiv.style.display = "none";
imgDiv.style.display = "block";


imgDiv.appendChild(newImg);
}




//when paragraph button is clicked
Pbutton.onclick = function() {
let newP = document.createElement("p"); //creating paragraph

newP.innerText = "The 918 spyder is the best Porsche since the Carrera GT. ";
newP.style.color = "white";
newP.style.backgroundColor = "black";
Pdiv.style.display = "block";
imgDiv.style.display = "none";

Pdiv.appendChild(newP);

}
