const heading = document.querySelector("#heading>a");
const inputElm = document.querySelector("#inputAmount");
const inputDes = document.querySelector("#inputDesc");
const ElmTable = document.querySelector("#expenseTable");

var totalExpens = 0;

heading.textContent = totalExpens;

const allexpenses = [];

function addExpenseToTotal() {
  const expenseItem = {};

  const textAmount = inputElm.value;
  const textDes = inputDes.value;

  const expense = parseInt(textAmount, 10);

  expenseItem.items = textDes;
  expenseItem.amount = expense;

  allexpenses.push(expenseItem);

  totalExpens += expense;

  const someText = `Total: ${totalExpens}`;

  heading.textContent = someText;

  //Show the table hear

  const data1 = allexpenses[0];
  const data2 = allexpenses[1];

  const data1Text = `${data1.amount} :: ${data1.items}`;
  const data2Text = `${data2.amount} :: ${data2.items}`;

  const tableText = `
    <div>${data1Text}</div>
    <div>${data2Text}</div>
  `;

  ElmTable.innerHTML = tableText;
}

var element = document.querySelector(".btnAddExpense");
element.addEventListener("click", addExpenseToTotal, false);
