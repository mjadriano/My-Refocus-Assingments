// Closure

// function bank(name){
//     let balance = 0;
//     console.log(name);

//     function deposit(amount){
//         balance += amount;

//         console.log(`You add money: ${amount}`);
//     }

//     function checkBalance(){
//         console.log(`Your balance is: ${balance}`);
//     }
//     return {
//         deposit,
//         checkBalance
//     };
// }

// var bnk = bank("mj");
// bnk.deposit(500);
// bnk.deposit(300);
// bnk.checkBalance();


function counter(){
    var count = 1;

    function add(count){
        count += 1;
        return count;
    }

    return (`original count: ${count}, new count: ${add(count)}`);
}

console.log(counter());