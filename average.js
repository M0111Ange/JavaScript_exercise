/* Create a function that recieves an array of numbers and return the average of the numbers*/

function calculateAverage(arr) {
    if (arr.length === 0) {
    
      return undefined;
    }
  
    let sum = 0;
  
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
  
    let average = sum / arr.length;
    return average;
  }

  let numbers = [8, 14, 15, 15, 39];
let avg = calculateAverage(numbers);
console.log(avg);