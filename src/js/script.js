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

let question1 = prompt("Введите обязательную статью расходов в этом месяце", '');
let	question2 = +prompt("Во сколько обойдется?", '');
appData.expenses[question1] = question2;

question1 = prompt("Введите обязательную статью расходов в этом месяце", '');
question2 = +prompt("Во сколько обойдется?", '');
appData.expenses[question1] = question2;

alert(appData.budget / 30);