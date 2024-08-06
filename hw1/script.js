let month = prompt('Введите количество месяцев: ');
let subscription = prompt('Введите тип подписки: ');
let premium = 150;
let duo = 250;
let family = 350;
if (subscription == 'premium') {
  let promo = prompt('Введите промокод:');
  if (promo == 'MUSIC') {
    let result = ((premium * month) / 100) * 70;
    console.log(result);
  } else {
    let withoutPromo = premium * month;
    alert(withoutPromo);
  }
} else if (subscription == 'duo') {
  console.log(duo * month);
  alert(duo * month);
} else if (subscription == 'family') {
  //4
  let extra = prompt('Введите дополнительное количество пользователей'); //'3'
  let result = family * month;
  alert(`Общая сумма для   ${4 + +extra} п на  ${month} месяцев= ${result}`);
} else {
  console.log('Нету такой подписки');
}
