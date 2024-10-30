<?php
// Проверяем, что запрос был отправлен методом POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $review = $_POST['review'];
    $rating = $_POST['rating'];
    // Валидация 
    if (!empty($name)  && !empty($review) && !empty($rating)) {
        echo "Имя: " . $name . "<br>";
        echo "Отзыв: " . $review . "<br>";
        echo "Оценка: " . $rating;
    } else {
        echo "Пожалуйста, проверьте введенные данные.";
    }
}
