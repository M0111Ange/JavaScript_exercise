//Create a function that recieves an array and returns the greates value inside that array
function greateValue(arry){
    return Math.max(...arry);
}
var myArray = [12,34,67,98,100];
var answer = greateValue(myArray);
console.log (answer);