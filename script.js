// Задание 2 часть 1

function showMessage () {
    console.log ('Я учу JavaScript!');
}

showMessage ();

// Задание 2 часть 2


// Задание со звездочкой ***

function calculateTotalPrice(quantity = 2, price = 15000000) {
    let result = quantity * price;
    alert (`Стоимость покупки: ${result.toLocaleString('ru-RU')} рублей`)
}
calculateTotalPrice ()
