var lastname = prompt("Введите вашу фамилию");
var firstname = prompt("Введите ваше имя");
var patronymic = prompt("Введите ваше отчество");
var age = prompt("Ваш возраст");
const isAvailable = confirm("Ваш пол мужской?");
alert(`Ваше ФИО: ${lastname} ${firstname} ${patronymic}
    Ваш возраст в годах: ${age}
    Ваш возраст в днях: ${age*365}
    Через 5 лет вам будет ${age}+${5}
    Ваш пол:мужской
    Вы на пенсии:нет`);
