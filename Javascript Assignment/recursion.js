//Recursion how it works


function main(status){
    if(status == 1){
        return "I found 1";
    }
    else {
        console.log(status);
        return main(status - 1);
    }
}

var result = main(15);
console.log(result);