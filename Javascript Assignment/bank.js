function bankControl(callback, data){
    callback(data);
}


function createBankAccount(){
    let balance = 0;
    

    function deposit(amount){
        balance += amount;
        console.log(`You deposit of ₱${amount}.`);
    }

    function withdraw(amount){
        if (amount <= balance){
            balance -= amount
            console.log(`You withdraw of ₱${amount}.`);
        } else {
            console.log("Invalid Transaction!")
        }
    }

    function checkBalance(name){
        console.log(`Hello ${name} your balance is ₱${balance}`);
    }

    return {
        deposit,
        withdraw,
        checkBalance
    }
}

var bank = createBankAccount();
// bank.deposit(300);
// bank.deposit(800);
// bank.withdraw(1200);
// bank.checkBalance("MJ");
bankControl(bank.deposit, 300);
bankControl(bank.deposit, 1000);
bankControl(bank.deposit, 500);
bankControl(bank.checkBalance, "MJ");
