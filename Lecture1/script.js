let a = 0;

const incresbtn = document.querySelector(".increment");
const Decresbtn = document.querySelector(".Decrement");

incresbtn.addEventListener("click", function (elem) {
  a += 1;
  document.querySelector(".p").innerHTML = a;
});

Decresbtn.addEventListener("click", function (elem) {
  a -= 1;
  document.querySelector(".p").innerHTML = a;
});
