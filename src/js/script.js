
let money = +prompt('Ваш бюджет на месяц?', '');
let time = prompt('Введите дату в формате YYYY-MM-DD', '');

let appData = {
  budget: money,
  timeData: time,
  expenses: {
  },
  optionalExpenses: {
  },
  income: [],
  savings: false
};

for (let i = 0; i < 2; i++) {
  let question = prompt("Введите обязательную статью расходов в этом месяце", '');
  let answer = +prompt("Во сколько обойдется?", '');

  if (typeof(question) != null && typeof(answer) != null && 
      question != '' && answer != '' && question.length < 50) {
    appData.expenses[question] = answer;
  } else {
    i--;
  }
}

// let i = 0;
// while(i < 2) {
//   let question = prompt("Введите обязательную статью расходов в этом месяце", '');
//   let answer = +prompt("Во сколько обойдется?", '');

//   if (typeof(question) != null && typeof(answer) != null && 
//       question != '' && answer != '' && question.length < 50) {
//     appData.expenses[question] = answer;
//   } else {
//     i--;
//   }
// }

// do {
//   let question = prompt("Введите обязательную статью расходов в этом месяце", '');
//   let answer = +prompt("Во сколько обойдется?", '');

//   if (typeof(question) != null && typeof(answer) != null && 
//       question != '' && answer != '' && question.length < 50) {
//     appData.expenses[question] = answer;
//   } else {
//     i--;
//   }
// } while (i < 2);

appData.moneyPerDay = appData.budget / 30;

alert(`Ежедневный бюджет: ${appData.moneyPerDay}`);

if (appData.moneyPerDay <= 100) {
  console.log('Минимальній уровень достатка');
} else if (appData.moneyPerDay > 100 || appData.moneyPerDay <= 2000) {
  console.log('средний уровень достатка');
} else if (appData.moneyPerDay > 2000) {
  console.log('Высокий уровень достатка');
} else {
  console.log('Произошла ошибка');
}