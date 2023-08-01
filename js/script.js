// select dom element
const counterElement = document.getElementById("counter");
const incrementElement = document.getElementById("increment");
const decrementElement = document.getElementById("decrement");

const counter2Element = document.getElementById("counter2");
const increment2Element = document.getElementById("increment2");
const decrement2Element = document.getElementById("decrement2");

//initial state
let count = 0;
let count2 = 0;

//event listeners
incrementElement.addEventListener("click", () => {
  count++;
  counterElement.innerText = count;
});
decrementElement.addEventListener("click", () => {
  count--;
  counterElement.innerText = count;
});
increment2Element.addEventListener("click", () => {
  count2++;
  counter2Element.innerText = count2;
});
decrement2Element.addEventListener("click", () => {
  count2--;
  counter2Element.innerText = count2;
});
