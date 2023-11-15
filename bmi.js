function calculatingBMI(height,weight){
    var BIMCalculation =  weight / (height * height);
    var height = height/100;
    

    if (BIMCalculation < 18.5) {
        return "Underweight";
    } else if (BIMCalculation >= 18.5 && bmi < 25) {
        return "Normal weight";
    } else if (BIMCalculation >= 25 && bmi < 30) {
        return "Overweight";
    } else {
        return "Obesity";
    }
}
console.log(calculatingBMI(65,70));



