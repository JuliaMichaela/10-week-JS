// 1 задание
function showMessage () {
    console.log ("Я учу JavaScript!");
}

showMessage ();

// 2 задание
const img = document.getElementById('img')

function showNextImg(){
    img.src = './images/2.jpeg'
}

function showPrevImg(){
    img.src = './images/3.jpeg'
}