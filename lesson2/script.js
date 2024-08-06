// let nomer = prompt('Введите номер пальца: ');
// if (nomer == 1) {
//   alert('Мизинец');
// } else if (nomer == 2) {
//   alert('Безымянный');
// } else if (nomer == 3) {
//   alert('Средний');
// } else if (nomer == 4) {
//   alert('Указательный');
// } else if (nomer == 5) {
//   alert('Большой');
// } else {
//   alert('Нету такого');
// }

// let first = Number(prompt('Введите первое число:')); //'3'
// let operator = prompt('Введите оператор:');
// let second = Number(prompt('Введите второе число:')); //'3'

// if (operator === '+') {
//   console.log(first + second); //'33'
// } else if (operator === '-') {
//   console.log(first - second); //'33'
// } else if (operator === '/') {
//   console.log(first / second); //'33'
// } else if (operator === '*') {
//   console.log(first * second); //'33'
// }

// // 9%2=1
// //10%2==0
// let san = 10;
// if (san % 2 === 0) {
//   console.log('Жуп сан');
// } else {
//   console.log('Так сан');
// }

let winHdd = 'Windows Acer черный HDD';
let winLen = 'Windows Lenovo белый SSD';
let proi7 = 'macbook pro i7 15" (дюймов)';
let proi5 = 'macbook pro i5 13"';
let macAir = 'macbook air 13"';
let os = prompt('Вам windows или mac?');
let params = prompt('Введите название или параметр');
// ||
// Параметр черный либо Acer либо HDD
if (os === 'windows') {
  if (params == 'черный' || params == 'Acer' || params == 'HDD') {
    console.log(winHdd);
  } else if (params == 'Lenovo' || params == 'SSD' || params == 'белый') {
    console.log(winLen);
  }
} else if (os === 'mac') {
  if (params == 'pro') {
    console.log('есть два макбука с такими параметрами');
    let pro = prompt('Введите еще параметр: ');
    if (pro == 'i7' || pro == '15"') {
      console.log(proi7);
    } else if (pro == 'i5' || pro == '13"') {
      console.log(proi5);
    }
  } else {
    console.log(macAir);
  }
}
// &&
// ||
let res = false || 1 || '' || 0 || 'hi' || true;
console.log(res);
