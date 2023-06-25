//Напиши скрипт, который при потере фокуса на инпуте(событие blur),
    //проверяет его содержимое на правильное количество введённых символов.

//Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
//Если введено подходящее количество символов, то border инпута становится зелёным,
// если неправильное - красным.
//Для добавления стилей, используй CSS-классы valid и invalid,
//которые мы уже добавили в исходные файлы задания.

let input = document.querySelector('#validation-input');

function classSwitching(a, b) {
    input.classList.remove(a);
    input.classList.add(b);
}

input.addEventListener("change", (event) => {
    if (input.value.length === Number(event.currentTarget.getAttribute('data-length'))) {
        classSwitching('invalid', 'valid');
       } else {
        classSwitching('valid', 'invalid');
    };
})