const headingEl = document.querySelector("#heading>a");

const inputDesc = document.querySelector("#inputDesc");

const inputElement = document.querySelector("#inputAmount");

// Get the ref table
const expenseTable = document.querySelector("#expenseTable>div");



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
  expenseItem.moment = new Date();

  allExpenses.push(expenseItem);

  totalExpens += expense;

  //set the heading elment to totalExpense //

  const someText = `Total: ${totalExpens} `;

  headingEl.textContent = someText;

  const allExpenseHTML = allExpenses.map(expense => createListItem(expense));

  const joinedallExpenseHTML = allExpenseHTML.join('');
  // console.log(joinedallExpenseHTML);
  expenseTable.innerHTML = joinedallExpenseHTML;
}

// Get btn element
const element = document.querySelector(".btnAddExpense");
// Listen on click event
element.addEventListener("click", addExpensToTotal, false);


//Controlling function

//Get Date String
function getDataString(moment) {
  return moment.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}


// Delete Items
function deleteItem(dateValue) {
  console.log("Delete Items", dateValue)

  for (let i = 0; i < allExpenses.length; i++) {
    if (allExpenses[i].moment.valueOf() === dateValue) {
      console.log('Item Found', allExpenses);
    }
  }
}


function createListItem({ items, amount, moment }) {
  return ` 

  <ul class="list-group py-3">
    <li class="list-group-item d-flex align-content-center justify-content-between px-5">
      <div class="d-flex flex-column">
           ${amount}
           <small class="text-muted">${getDataString(moment)}</small>
      </div>

      <div>
          <span class="px-5">
            ${items}
          </span>
          <button 
          type="button"
          id="btn-delet"
          onclick="deleteItem(${moment.valueOf()})"
          >
              <i class="ri-delete-bin-line"></i>
          </button>
      </div>

   </li>
</ul>

  `;
}