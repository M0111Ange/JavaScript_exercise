//Write a function that squares each element of an array.
function squareArrayElements(arr) {
    var squaredArray = [];

    for (var i = 0; i < arr.length; i++) {
        squaredArray.push(arr[i] * arr[i]);
    }

    return squaredArray;
}

console.log(squareArrayElements([2, 12, 33, 4, 5]));