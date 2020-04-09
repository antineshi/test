"use strict"
let money = +prompt("Ваш бюджет на месяц?", ''),
    time = prompt("Введите дату в формате YYYY-MM-DD"),
    i = 0;
    
let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
}
do {
    let topic = prompt('Введите обязательную статью расходов в этом месяце', ''),
        cash = +prompt('Во сколько обойдется?', '');
        i++;
        if( (typeof(topic)) === 'string' && (typeof(topic)) != null && (typeof(cash)) != null 
        && topic != '' && cash!='' && topic.length <=50 )        
        {
            console.log('done');
            appData.expenses[topic] = cash;
        } else {
            i=i-1;
        }
        
} while(i < 2);
appData.moneyPerDay = appData.budget/30
alert('Ежедневный бюджет: ' + appData.moneyPerDay);

if(appData.moneyPerDay < 400) console.log('Минимальный уровень домтатка');
else if(appData.moneyPerDay >= 400 && appData.moneyPerDa < 1000) console.log('Средний уровень достатка');
else if(appData.moneyPerDay >= 1000) console.log('Высокий уровень достатка');
else console.log('Ошибка');

