import { createStore } from "redux";
const add = document.getElementById('add');
const minus = document.getElementById('minus');
const number = document.querySelector('span');

number.innerText = 0;

// a reducer is a function that modifes your data
// first it changes your data
// but also whatever it returns, that is the data of your application
const countModifier = (count = 0, action) => {
  if(action.type === "ADD") {
    return count + 1;
  } else if (action.type === "MINUS") {
    return count - 1;
  } else {
    return count;
  }
};
const countStore = createStore(countModifier);

const onChange = () => {
  number.innerText = countStore.getState();
};

countStore.subscribe(onChange);

const handleAdd = () => {
  countStore.dispatch({ type: "ADD" });
};

const handleMinus = () => {
  countStore.dispatch({ type: "MINUS" });
};
add.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);
