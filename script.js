// Задание 2 часть 1

function showMessage () {
    console.log ('Я учу JavaScript!');
}

showMessage ();

// Задание 2 часть 2

const image = document.getElementById('image');

function showNext () {
    image.src = './assets/images/img2.jpeg';
}

function showPrevious () {
    image.src = './assets/images/img1.jpg';
}


// Задание со звездочкой ***
const contentPrice = document.getElementById ('content');

function calculateTotalPrice(quantity = 2, price = 15000000) {
    let result = quantity * price;
    contentPrice.textContent= `Стоимость покупки: ${result.toLocaleString('ru-RU')} рублей.`
}

