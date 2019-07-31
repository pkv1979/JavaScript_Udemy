'use strict';

let money;
let time;

function start() {
  money = +prompt('Ваш бюджет на месяц?', '');
  time = prompt('Введите дату в формате YYYY-MM-DD', '');

  while (isNaN(money) || money == '' || money == null) {
    money = +prompt('Ваш бюджет на месяц?', '');
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
  savings: true,

  chooseExpanses: function() {
    for (let i = 0; i < 2; i++) {
      let question = prompt('Введите обязательную статью расходов в этом месяце', '');
      let answer = +prompt('Во сколько обойдется?', '');
      
      if (typeof(question) != null && typeof(answer) != null && 
      question != '' && answer != '' && question.length < 50) {
        appData.expenses[question] = answer;
      } else {
        i--;
      }
    }
  },

  detectDayBudget: function() {
    appData.moneyPerDay = +(appData.budget / 30).toFixed(2);
    alert(`Ежедневный бюджет: ${appData.moneyPerDay}`);  
  },

  detectLevel: function() {
    if (appData.moneyPerDay <= 100) {
      console.log('Минимальный уровень достатка');
    } else if (appData.moneyPerDay > 100 || appData.moneyPerDay <= 2000) {
      console.log('средний уровень достатка');
    } else if (appData.moneyPerDay > 2000) {
      console.log('Высокий уровень достатка');
    } else {
      console.log('Произошла ошибка');
    }  
  },

  checkSavings: function() {
    if (appData.savings) {
      let save = +prompt('Какова сумма накоплений?', '');
      let percent = +prompt('Под какой процент?', '');
  
      appData.monthIncome = +(save / 100 / 12 * percent).toFixed(2);
      alert(`Доход в месяц с вашего депозита: ${appData.monthIncome}`);
    }  
  },

  chooseOptExpanses: function() {
    for (let i = 0; i < 3; i++) {
      let optExpenses = prompt('Статья необязательных расходов?', '');
  
      if (typeof(optExpenses) == null || optExpenses == '') {
        appData.optionalExpenses[i + 1] = optExpenses;
      } else {
        i--;
      }
    }  
  },

  chooseIncome: function() {
    while (true) {
      let items = prompt('Что принесет дополнительный доход? (перечислите через запятую)', '');
      if (typeof(items) == 'string' && items != '') {
        appData.income = items.split(', ');
        break;
      }
    }

    appData.income.push(prompt('Может что-то еще?'));
    appData.income.sort();

    console.log('Способы доп. заработка:');
    appData.income.forEach(function(item, i) {
      console.log(`${i + 1}: ${item}`);
    });
  },

  viewAppData: function() {
    console.log('Наша программа включает в себя данные:');
    for (let key in appData) {
      console.log(`${key} - ${appData[key]}`);
    });
  }
};