function bmi(weight, height){
    result = 703 * (weight / height**2);

    if(result <= 18.5){
        console.log(`Your BMI is ${result.toFixed(2)} and you are THIN!`);
    } else if (result >= 18.6 && result <= 24.9){
        console.log(`Your BMI is ${result.toFixed(2)} and you are HEALTHY!`);
    } else if (result >= 25 && result <= 29.9){
        console.log(`Your BMI is ${result.toFixed(2)} and you are OVERWEIGHT!`);
    } else {
        console.log(`Your BMI is ${result.toFixed(2)} and you are OBESE!`);
    }
}

bmi(150, 70);