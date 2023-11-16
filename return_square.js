//Create a function that returns the square root of a given number.

function squareRootOfGivenNumber(number){
    if(number < 0){
        return undefined;
    }else{
        return Math. sqrt(number);
    }
    
}
let given = 81;
console.log(squareRootOfGivenNumber(given));