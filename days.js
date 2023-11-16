//Create a program that takes a number representing a day of the week (1-7) and outputs the name of the day.
function returnDaysOfWeek(days){
    switch(days){
        case 1:
        return "day1";
        break

        case 2:
        return "day2";
        break

        case 3:
        return "day3";
        break 

        case 4:
        return "day4";
        break

        case 5:
        return "day5";
        break
        case 6:
        return "day6";
        break
        case 7:
        return "day7";
        break
        default: 
        return "They are only 7 days";
    }
}
console.log(returnDaysOfWeek(4));