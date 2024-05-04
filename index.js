const decreaebtn = document.getElementById("decreasebtn");
const increaebtn = document.getElementById("increasebtn");
const resetbtn = document.getElementById("resetbtn");
const countlable = document.getElementById("Count");
let count = 0;

decreaebtn.onclick = function () {
  count--;
  countlable.textContent = count;
};

increaebtn.onclick = function () {
  count++;
  countlable.textContent = count;
};

resetbtn.onclick = function () {
  count = 0;
  countlable.textContent = count;
};
