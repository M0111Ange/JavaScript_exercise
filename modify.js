//Modify the first array to make sure that it will also display the last 3 numbers and the first 3 numbers in front of the sorted array
function modifyDisplayArray(arr) {
    const array = arr.slice(0, 3).concat(arr.slice().sort((a, b) => a - b), arr.slice(-3));
    console.log(array);
}

var numbers = [3, 4, 8, 2, 1, 2, 2, 6, 3, 4];
modifyDisplayArray(numbers);