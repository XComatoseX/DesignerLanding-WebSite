function toggleButtonClass(button) {

  var listItem = button.parentNode;

  // Получаем все кнопки внутри родительского элемента
  var allButtons = listItem.parentNode.querySelectorAll('.works__btn');

  // Убираем класс works__btn--active у всех кнопок
  allButtons.forEach(function(btn) {
    btn.classList.remove('works__btn--active');
  });

  // Добавляем класс works__btn--active только к текущей кнопке
  button.classList.toggle('works__btn--active');
}
