//Callback

// function showMessage(callback, data = {}){
//     var result = callback(data);

//     console.log(result);
// }

// function addition({num1, num2}){

//     return num1 + num2;
// }

// function minus({num1, num2}){
//     return num1 - num2;
// }

// showMessage(addition, {
//     num1: 15,
//     num2: 10,
//     message: "HELLO"
// }); 


function discount(percentage, amount){
    let discounted_amount = amount - (amount * (percentage / 100));
    return discounted_amount;
}

function age_checker(age){
    return (age >= 10 ? true: false);
}

function calculate(customer_group, discount_func){

    const group_count = customer_group.length;
    var subtotal = group_count * 299;

    if (group_count < 6){
        return `Sorry, No Discount. Bill: ${subtotal}`;
    }

    var discount = 0;
    var grand_total;
    if(customer_group.every(age_checker)){
        discount = 15;
        grand_total = discount_func(discount, subtotal);
        
    }else{
        discount = 10;
        grand_total = discount_func(discount, subtotal);
        
    }
    return `${discount}% discount. Bill: ${grand_total}`;
}

var customer_group1 = [8, 12, 11, 11, 18, 24, 5, 10];
var customer_group2 = [10, 11, 11, 13, 19, 14];
var customer_group3 = [12, 12, 14];
console.log(calculate(customer_group1, discount));
console.log(calculate(customer_group2, discount));
console.log(calculate(customer_group3, discount));