const body = document.querySelector("body");

const IMG_NUMBER =4;

function handleImageLoad(){
    console.log("finished loading");
}

function panintImage(imgNumber){
    const image = new Image();
    image.src=`images/${imgNumber+1}.jpg`;
    image.classList.add("bgImage");
    body.appendChild(image);
    image.addEventListener("loadend",handleImageLoad)
}

function genRandom(){
    const number= Math.floor(Math.random()*IMG_NUMBER);
    return number;
}

function init(){
    const randomNumber =genRandom();
    panintImage(randomNumber);
}

init();