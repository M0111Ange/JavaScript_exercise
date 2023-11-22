//Write a function that checks if an array is sorted in ascending order.
function isSortedAscending(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        return false;
      }
    }
    return true;
  }
  
  
  console.log(isSortedAscending([1, 2, 7, 4, 5])); 
  