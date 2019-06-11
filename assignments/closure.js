// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

let firstName = "Bill";
function getLastName() {
  return `${firstName} Paxton`
}

console.log("Name: " + getLastName());

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.

  let count = 0;
  return function(){
    count = count + 1;
    return count;
  }
};

const newCounter = counter();
//console.log(newCounter());
//console.log(newCounter());
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.

  let count = 0;
  return {
    increment: function(){
      return count = count + 1;
    },
    decrement: function(){
      return count = count - 1;
    }
  }
};

const newCounterTwo = counterFactory();
console.log(newCounterTwo.increment());
console.log(newCounterTwo.increment());
console.log(newCounterTwo.decrement());
