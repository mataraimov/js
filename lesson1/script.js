// Number - сандар
// Операторы числовые: + - / * ** %
// String - строка
// Операторы строковые: +(Конкатенация)
// NaN-Not a Number
// 0-false,ложь,жок
// 1-true,истина,бар
// Boolean(true,false)
// Операторы булевые: жок
// undefined-неопознанный
// Операторы сравнения: > < <= >= == != !== ===
// 1!=1 (false)
// 0!=1 (true)
// 2==1 (false)

let age = 21;
// if (age >= 18) {
//   console.log('Вы совершеннолетний');
// } else {
//   console.log('Вы несовершеннолетний');
// }

let temp = 33;

// if (temp >= 30) {
//   console.log('Очень жарко');
// } else if (temp <= 10) {
//   console.log('Очень холодно');
// } else {
//   console.log('Комфортная погода');
// }
// Операторы Логические
// &&-AND ||-OR !-NOT
// &-Амперсант
// |-Пайп
// &&- 3>=4 && 4<=5
/*
&&-Эки жак тен чындык болушун талап кылат
||-Эки жактын бироосун чындык болушун талап кылат
*/
let weekDay = 'Суббота';

if (weekDay == 'Воскресенье' || weekDay == 'Суббота') {
  console.log('Можно поспать дольше');
} else {
  console.log('Вставай на работу');
}
let sum = 10;
if (sum >= 20) {
  console.log('Можно купить билет');
} else {
  console.log('Недостаточно средств');
}
// let num = +prompt('Сколько у тебя денег?');
// Явное приведение типов
// Неявное приведение типов
// let num = "20"

// 2015 - 10=2005

let dollar = 84;
let ruble = 1.2;
let tenge = 0.2;
let summa = +prompt('Сколько у тебя денег?');
let currency = prompt('В какую валюту тебе надо?');

if (currency == '$') {
  console.log(summa / dollar);
} else if (currency == 'Р') {
  console.log(summa / ruble);
} else if (currency == 'T') {
  console.log(summa / tenge);
} else {
  console.log('Нету такой валюты');
}
