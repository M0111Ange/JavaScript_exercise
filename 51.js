//Write a function that filters out negative numbers from an array.
function filterOutNegatives(arr) {
    return arr.filter(number => number >= 0);
  }
  
  console.log(filterOutNegatives([1, -2, 3, -4, 5, -6]));