//Write a function that calculates the square of a number.

function squareRootOfNumber(number){
    if(number < 0){
        return undefined;
    }else{
        return Math. sqrt(number);
    }
}
console.log(squareRootOfNumber(64));