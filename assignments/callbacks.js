// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/* 

  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:

  // Higher order function using "cb" as the call back
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // Function invocation 
  firstItem(items, function(first) {
    console.log(first)
  });

*/


function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  cb(arr.length);
}

getLength(items, function(length){
  console.log(length);
})

function last(arr, cb) {
  // last passes the last item of the array into the callback.
  cb(arr[arr.length - 1]);
}

last(items, function(lastItem) {
  console.log(lastItem);
})

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.

  if (typeof cb === "function") { // validate cb

    const sum = x + y;
    cb(sum);

  } else {
    console.log("cb is not a callback function");
    
  }
  
}

sumNums(5,5, (sum) => {
  console.log(sum);
  
});
  
  
function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.

  if(typeof cb === "function") {

    const product = x * y;
    cb(product);

  } else {
    console.log("cb is not a callback function");  
  }
  
}

multiplyNums(12, 12, (product) => {
  console.log(product);
  
})

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.

  if(typeof cb === "function") {

    const isItemFound = `${item} is in the list ?: ${list.includes(item)}`;
    cb(isItemFound)
  } else {
    cb("cb is not a callback function");   
  }


}

contains("Pencil", items, (isItemFound) => {
  console.log(isItemFound);
   
})
/* STRETCH PROBLEM */

const duplicateItems = ['Pencil', 'Notebook', 'yo-yo', 'Gum', 'Notebook'];
function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.


  const uniqueItems = array.filter((item, index) => {
    return array.indexOf(item) >= index;
  }) 

  cb(uniqueItems);
}

removeDuplicates(duplicateItems, (unique) => {
  console.log(unique);
  
})