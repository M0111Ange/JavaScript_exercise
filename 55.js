//Write a function that checks if a given year is a leap year.

function leapYearCalculator(number) {
    if (number % 4 === 0 && number % 100 === 0 && number % 400 === 0){
        return true;
    }
    else{
        return false;
    }
    
}
leapYearCalculator(2002)
console.log (leapYearCalculator(2002));


// module.exports = {
//     leapYearCalculator
// }












