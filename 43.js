//Write a function that sorts an array of numbers in ascending order.
function sortArrayAscending(arr) {
    return arr.sort((a, b) => a - b);
}

console.log(sortArrayAscending([3, 4, 8, 2, 1, 2, 2, 6, 3, 4]));