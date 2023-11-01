const headingEl = document.querySelector("#heading>a");

const inputDesc = document.querySelector("#inputDesc");

const inputElement = document.querySelector("#inputAmount");

// Get the ref table
const expenseTable = document.querySelector("#expenseTable");

let totalExpens = 0;

headingEl.textContent = totalExpens;

//allExpenses at once place
const allExpenses = [];

function addExpensToTotal() {
  const expenseItem = {};

  // read value from inoutAmount
  const textAmount = inputElement.value;

  // read the desc from inputDesc
  const descText = inputDesc.value;

  const expense = parseInt(textAmount, 10); //This will convert string to an integer

  //put it in object
  expenseItem.items = descText;
  expenseItem.amount = expense;

  allExpenses.push(expenseItem);

  totalExpens += expense;

  //set the heading elment to totalExpense //

  //  const someText = "The expense for this month is:" + totalExpens;//
  const someText = `Total: ${totalExpens} `;

  headingEl.textContent = someText;

  //Show the table here

  const data1 = allExpenses[0];
  const data2 = allExpenses[1];

  const data1Text = `${data1.amount} :: ${data1.items}`;
  const data2Text = `${data2.amount} :: ${data2.items}`;

  const tableText = `
   <div>${data1Text}</div>
   <div>${data2Text}</div>
  `;
  expenseTable.innerHTML = tableText;
}

// Get btn element
var element = document.querySelector(".btnAddExpense");
// Listen on click event
element.addEventListener("click", addExpensToTotal, false);
