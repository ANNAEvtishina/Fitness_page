

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


document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.like-button').forEach(button => {
        button.addEventListener('click', async () => {
            const id = button.getAttribute('data-id');
            const response = await fetch('update_likes.php', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ id: id })
            });

            if (response.ok) {
                const result = await response.json();
                document.getElementById(`counter-${id}`).innerText = result.likes;
            } else {
                console.error('Ошибка обновления лайков');
            }
        });
    });
});