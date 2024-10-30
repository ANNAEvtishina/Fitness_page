console.log('Скрипт загружен');

const burgerMenu = document.querySelector('.burger-menu');
const menu = document.querySelector('.menu');
burgerMenu.addEventListener('click', () => {
    menu.classList.toggle('active');
});

let count = 0;
const button = document.getElementById("click-button"); // найдите элементы с помощью getElement или аналогии
const counterDisplay = document.getElementById("counter");

button.addEventListener("click", function () {
  count += 1;
  counterDisplay.textContent = count; // Увеличьте значение count и обновите текст элемента
});