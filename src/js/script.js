let money;
let time;

function start() {
  money = +prompt('Ваш бюджет на месяц?');
  time = prompt('Введите дату в формате YYYY-MM-DD');

  while (isNaN(money) || money == '' || money == null) {
    money = +prompt('Ваш бюджет на месяц?');
  }
}

start();

let appData = {
  budget: money,
  timeData: time,
  expenses: {
  },
  optionalExpenses: {
  },
  income: [],
  savings: true
};


function chooseExpanses() {
  for (let i = 0; i < 2; i++) {
    let question = prompt("Введите обязательную статью расходов в этом месяце");
    let answer = +prompt("Во сколько обойдется?");
    
    if (typeof(question) != null && typeof(answer) != null && 
    question != '' && answer != '' && question.length < 50) {
      appData.expenses[question] = answer;
    } else {
      i--;
    }
  }
}

chooseExpanses();

function detectDayBudget() {
  appData.moneyPerDay = +(appData.budget / 30).toFixed(2);
  alert(`Ежедневный бюджет: ${appData.moneyPerDay}`);
}

detectDayBudget();

function detectLevel() {
  if (appData.moneyPerDay <= 100) {
    console.log('Минимальный уровень достатка');
  } else if (appData.moneyPerDay > 100 || appData.moneyPerDay <= 2000) {
    console.log('средний уровень достатка');
  } else if (appData.moneyPerDay > 2000) {
    console.log('Высокий уровень достатка');
  } else {
    console.log('Произошла ошибка');
  }
}

detectLevel();

function checkSavings() {
  if (appData.savings) {
    let save = +prompt('Какова сумма накоплений?');
    let percent = +prompt('Под какой процент?');

    appData.monthIncome = +(save / 100 / 12 * percent).toFixed(2);
    alert(`Доход в месяц с вашего депозита: ${appData.monthIncome}`);
  }
}

checkSavings();

function chooseOptExpanses() {
  for (let i = 0; i < 3; i++) {
    let optExpenses = prompt('Статья необязательных расходов?');

    if (typeof(optExpenses == null || optExpenses == '')) {
      appData.optionalExpenses[i + 1] = optExpenses;
    } else {
      i--;
    }
  }
}

chooseOptExpanses();