//get the headding element
const headingEl = document.querySelector("#heading>a");

//get the refrence to desc element
const inputDesc = document.querySelector("#inputDesc");

//Ref to input amount
const inputElement = document.querySelector("#inputAmount");


//init value of expense at 0
let totalExpens = 0;

// set the headding element to totalExpens//
headingEl.textContent = totalExpens;

// onButtonClick and inputAmount to totalExpense

function addExpensToTotal() {
  // read value from inoutAmount
  const textAmount = inputElement.value;

  // read the desc from inputDesc
  const descText = inputDesc.value;

  // console.log({descText, textAmount});

  // convert it to number
  const expense = parseInt(textAmount, 10); //This will convert string to an integer

  // add that value to toatalExpense
  totalExpens += expense;

  //set the heading value to totalExpnse //
  headingEl.textContent = totalExpens;
}

// Get btn element
var element = document.querySelector(".btnAddExpense");
element.addEventListener("click", addExpensToTotal, false);
// Listen on click event
