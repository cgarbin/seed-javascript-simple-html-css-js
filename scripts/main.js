"use strict";

const myButton = document.querySelector("button");

myButton.onclick = function() {
  const myImage = document.querySelector("img");
  const newImage = myImage.getAttribute("src").includes("inverted")
    ? "images/nasalogo.png"
    : "images/nasalogo-inverted.png";
  myImage.setAttribute("src", newImage);
};
