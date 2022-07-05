const lastname = prompt('Введите вашу фамилию');
const firstname = prompt('Введите ваше имя');
const patronymic = prompt('Введите ваше отчество');
const age = prompt('Ваш возраст в годах');
const isAvailable = confirm('Ваш пол - мужской?');

if (age == 20) {
    alert (`Ваше ФИО: ${lastname} ${firstname} ${patronymic}
    Ваш возраст в годах: ${age}
    Ваш возраст в днях: ${age*365}
    Через 5 лет вам будет ${age}+${5}
    Ваш пол:мужской
    Вы на пенсии:нет`);
}

