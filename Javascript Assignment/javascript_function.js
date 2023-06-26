//Object
let obj = {
    num1: 100,
    num2: 50,
    sum: 150,
    difference: 50,
    product: 500,
    quotient: 20
};


function showData(){
    console.log(`First Number: ${obj.num1}`);
    console.log(`Second Number: ${obj.num2}`);
    console.log(`The sum is: ${obj.sum}`);
    console.log(`The difference is: ${obj.difference}`);
    console.log(`The product is: ${obj.product}`);
    console.log(`The quotient is: ${obj.quotient}`);
}

showData(obj);
console.log("===============================");


function newSetOfNumbers(num1, num2){
        obj.num1 = num1,
        obj.num2 = num2;
        obj.sum = add(num1, num2);
        obj.difference = difference(num1, num2);
        obj.product = product(num1, num2)
        obj.quotient = quotient(num1, num2);

}
//Sum of the two numbers
function add(num1, num2){
    return num1 + num2;   
}

//Difference of the two numbers
function difference(num1, num2){
    return num1 - num2;
}

//Product of the two numbers
function product(num1, num2){
    return num1 * num2;
}

function quotient(num1, num2){
    return num1 / num2;
}


newSetOfNumbers(200,10);
showData(obj);
console.log("===============================");
newSetOfNumbers(500,20);
showData(obj);
console.log("===============================");
