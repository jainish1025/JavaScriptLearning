//init value of expense at 0

var totalExpens = 0;

// onButtonClick and inputAmount to totalExpense

function addExpensToTotal() {
  // read value from inoutAmount
  const inputElement = document.querySelector("#inputAmount");
  const textAmount = inputElement.value;

  // convert it to number
  const expense = parseInt(textAmount, 10); //This will convert string to an integer

  // add that value to toatalExpense
  totalExpens += expense;
  document.querySelector("#outputoftotalexpense>h1>a").innerHTML = totalExpens;
}

// Get btn element
var element = document.querySelector(".btnAddExpense");
element.addEventListener("click", addExpensToTotal, false);
// Listen on click event
