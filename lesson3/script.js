// // Array
// // let ar=[12,'sf',true]
// // substring,trim,indexOf-String
// // push,pop,shift,unshift
// //'TEXT'[0]=>'T'
// // DRY-Don't Reply Yourself
// let characters = ['Эрен', 'Микаса', 'Армин', 'Бертольд'];
// let sub = characters.splice(1, 2);
// characters[0];
// let wishList = 'Счастье,Здоровье,Ум,Богатство';
// // split-Перевод в массив через деление
// let wishArray = wishList.split(',');

// // wishText.slice()
// // wishArray.slice()
// // join-Присоединить элементы массива
// let result = wishArray.join('');
// console.log(characters.includes('Эрен'));
// let newArr = wishArray.slice(-2);
// console.log(result);

// let products = ['melon', 'potato', 'cocoa', 'carrot', 'blueberry', 'strawberry', 'tomato'];
// let products2 = [];
// for (let i = 0; i < products.length; i++) {
//   if (products[i].length % 2 == 0) {
//     products2.push(products[i]);
//   }
// }
// console.log(products2);

// let textR = 'Table'; //=>['T','a','b','l','e']
// let arr = textR.split('');
// console.log(arr.reverse().join(' '));

// let words = ['Just', 'Do', 'It', '!'];
// words.push('Shai');

let vowels = [];
let chars = ['A', 'C', 'E', 'F', 'I', 'M'];
let A = chars.shift();
chars.shift();
let E = chars.shift();
chars.pop();
let I = chars.pop();
vowels.push(A);
vowels.push(E);
vowels.unshift(I);
console.log(chars);
console.log(vowels); // ["I","А", "E", ]

let cities1 = ['Bishkek', 'London', 'Tokyo', 'Oslo', 'Berlin'];
let cities2 = [];

for (let i = 0; i < cities1.length; i++) {
  if (cities1[i].length % 2 == 0) {
    cities2.push(cities1[i]);
  }
}

let textReverse = 'Iphone X';
let newArr = textReverse.split('');
newArr.reverse();
let joined = newArr.join('');
console.log(joined);

let searchedText = 'EAsS';
let musics = ['Do I wanna know', 'Chandelier', 'Relax Take It Easy', 'Born To Die', 'Arcade'];
let switchMusic = false;
let firstWord = '';
for (let i = 0; i < musics.length; i++) {
  let found = musics[i].toLowerCase().includes(searchedText.toLowerCase());
  if (found) {
    let newA = musics[i].split(' ');
    switchMusic = true;
    firstWord = newA[0];
  }
}
if (switchMusic) {
  console.log(firstWord);
} else {
  console.log('Такой песни нет');
}

let females = ['Собака', 'Кошка', 'Волчиха'];
let couples = ['Волк', 'Пес', 'Кот']; //'Пес'
//["Волчиха", "Волк", "Собака", "Пес", "Кошка", "Кот"]
let wolf = couples.shift();
let cat = couples.pop();
let doggy = females.shift();
let kitty = females.shift();
let wolfy = females.pop();
couples.push(kitty);
couples.push(cat);
couples.unshift(doggy);
couples.unshift(wolf);
couples.unshift(wolfy);
console.log(couples);

let digits = [1, 2, '3', '4', 5, '6'];
//
let nums = [];
for (let i = 0; i < digits.length; i++) {
  if (typeof digits[i] == 'number') {
    nums.push(digits[i]);
  }
}
// ваш код

console.log(nums); // [1, 2, 5]

let invited = ['Sakura', 'Itachi', 'Obito', 'Naruto', 'Kakashi'];
let names = ['Naruto', 'Sasuke', 'Sakura'];
for (let i = 0; i < invited.length; i++) {
  if (names[0] !== invited[i] && names[1] !== invited[i] && names[2] !== invited[i]) {
    console.log('Уже есть');
  } else {
    names.push(invited[i]);
  }
}

// ваш код

console.log(names); // ["Naruto", "Sasuke", "Sakura", "Itachi", "Obito", "Kakashi"]

let nullAmount = 10;
let oneStep = 3;
let stringOfNulls = [];
for (let i = 1; i <= nullAmount; i++) {
  if (i % 4 == 0 && i != 0) {
    stringOfNulls.push(1);
  }
  stringOfNulls.push(0);
}
console.log(stringOfNulls);
let messages = [
  ['Салам!', 'Манас', '20:40'],
  ['Привет)', 'Каныкей', '21:00'],
  ['Че делаешь?', 'Манас', '21:00'],
  ['Сижу...', 'Каныкей', '22:32'],
];
console.log(stringOfNulls.join(''));
let i = ['Салам!', 'Манас', '20:40'];
console.log(`Сообщение от ${i[1]}: ${i[0]}\n
Время: ${i[2]}\n-----`);
