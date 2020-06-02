import { createStore } from "redux";
const add = document.getElementById('add');
const minus = document.getElementById('minus');
const number = document.querySelector('span');

// a reducer is a function that modifes your data
// first it changes your data
// but also whatever it returns, that is the data of your application
const countModifier = (count = 0, action) => {
  console.log(count, action);
  if(action.type === "ADD") {
    return count + 1;
  } else if (action.type === "MINUS") {
    return count - 1;
  } else {
    return count;
  }
};

const countStore = createStore(countModifier);

countStore.dispatch({type: "ADD"});
countStore.dispatch({type: "ADD"});
countStore.dispatch({type: "ADD"});
countStore.dispatch({type: "ADD"});
countStore.dispatch({type: "ADD"});
countStore.dispatch({type: "MINUS"});

console.log(countStore.getState());