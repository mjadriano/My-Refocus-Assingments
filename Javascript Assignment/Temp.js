// Convert temperature from celcius to kelvin.
function convert1(tempCelcius){
    let temp1 = tempCelcius + 273.15;
    return temp1.toFixed(2);
}

// Convert temperature from fahrenheit to kelvin.
function convert2(tempFahrenheit){
    let temp2 = ((tempFahrenheit - 32) * 5/9 ) + 273.15;
    return temp2.toFixed(2);
}


function tipCalculator(mealCost){
    let tip = (mealCost * 0.1);
    return tip;
}
console.log(convert1(30));
console.log(convert2(30));
console.log(tipCalculator(300));