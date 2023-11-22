//Write a function that calculates the sum of the even numbers in an array.
function sumOfEvenNumbers(arr) {
    var sum = 0;

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            sum += arr[i];
        }
    }

    return sum;
}

console.log(sumOfEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));