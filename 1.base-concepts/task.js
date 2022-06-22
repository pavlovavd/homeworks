'use strict'
function solveEquation(a, b, c) {
  let arr = [];
  let D = (b ** 2) - (4 * a * c);
  if (D < 0) {
    return arr = [];
  }
  else if (D == 0) {
    arr.push(-b / (2 * a));
    return arr;
  } 
  else if (D > 0) {
    arr.push((-b + Math.sqrt(D) )/(2 * a));
    arr.push((-b - Math.sqrt(D) )/(2 * a));
    return arr;
  }
  return arr; // array
}


function calculateTotalMortgage(percent, contribution, amount, date) {
  if (Number.isNaN(Number(percent)) || Number(percent) < 0) {
    return percent = String(`Параметр "Процентная ставка" содержит неправильное значение "${percent}"`);
  }

  if (Number.isNaN(Number(contribution)) || Number(contribution) < 0) {
    return contribution = String(`Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`);
  }

  if (Number.isNaN(Number(amount)) || Number(amount) < 0) {
    return amount = String(`Параметр "Общая стоимость" содержит неправильное значение "${amount}"`);
  }

  let refundAmount = amount - contribution;
  let monthlyPercent = (percent / 12) / 100;
  let firstDate = new Date();
  let finalDate = new Date(date);
  let monthAmount = firstDate.getMonth() - finalDate.getMonth() + (12 * (firstDate.getFullYear() - finalDate.getFullYear()));
  let monthlyPayment = refundAmount * (monthlyPercent + (monthlyPercent / ((Math.pow((1 + monthlyPercent), monthAmount) - 1))));

  let totalAmount = (monthlyPayment * monthAmount).toFixed(2);
  return Number(totalAmount);

}
