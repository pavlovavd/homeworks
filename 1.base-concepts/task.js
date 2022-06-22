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
  let refundAmount = amount - contribution;
  let monthlyPercent = (percent / 12) / 100;

  let firstDate = new Date();
  let finalDate = new Date(date);
  let monthAmount = firstDate.getMonth() - finalDate.getMonth() + (12 * (firstDate.getFullYear() - finalDate.getFullYear()));
  let monthlyPayment = refundAmount * (monthlyPercent + (monthlyPercent / (((1 + monthlyPercent) ** monthAmount) - 1)));

  let totalAmount = (monthlyPayment * monthAmount).toFixed(2);
  return Number(totalAmount);

  if (Number.isNaN(percent)) {
    return percent = `Параметр процентной ставки содержит неправильное значение ${percent}`
  }

  if (Number.isNaN(contribution)) {
    return contribution = `Параметр суммы первоначального взноса содержит неправильное значение ${contribution}`
  }

  if (Number.isNaN(amount)) {
    return amount = `Параметр суммы кредита содержит неправильное значение ${amount}`
  }

}
