//Bank Sytem

/*
    Object
        Bank Name - String
        Address - String
        Bank Money - Number
        Accounts - Array of Objects
            - Name - String
            - LastName - String
            - Gender - String
            - Address - String
            - Balance - Number
            - Pin - Number
            - User Name - String
            - Password - String
*/


var isLoggedIn = false;
var userID= null;

var bank = {
    bankName: "Bank of Refocus",
    Address: "Philippines",
    bankMoney: 0,
    Accounts: [
        {
            Name: "MJ",
            lastName: "Adriano",
            Gender: "Male",
            Address: "Pampanga",
            Balance: 0,
            pin: 123456,
            userName: "dart23",
            password: "asd123"
        },
        {
            Name: "Uno",
            lastName: "Adriano",
            Gender: "Male",
            Address: "San Fernando",
            Balance: 0,
            pin: 456789,
            userName: "uno18",
            password: "qwe123"
        },
        {
            Name: "Twodis",
            lastName: "Adriano",
            Gender: "Female",
            Address: "Angeles",
            Balance: 0,
            pin: 555555,
            userName: "malikotAko",
            password: "malikot123"
        }
    ],
    checkBankBalance: function(){
        console.log('The bank balance is: ₱' + this.bankMoney);
    },
    depositBankMoney: function(amount){
        this.bankMoney += amount; // bank.bankMoney = amount + bank.bankMoney
    console.log(`Adds ₱${amount.toFixed(2)} to your account`);
    },
    withdrawBankMoney: function(amount){
        if(amount <= this.bankMoney && amount > 0){
            this.bankMoney -= amount;
            console.log(`Deducted ₱${amount.toFixed(2)} to your account`);
        }
        else{
            console.log("insufficient Bank Money!");
        }
    }

}

//Checking of the Bank Balance

// function checkBankBalance(){
//     console.log('The bank balance is: ₱' + bank.bankMoney);
// }


//Deposit Bank Money
// function depositBankMoney(amount){
//     bank.bankMoney += amount; // bank.bankMoney = amount + bank.bankMoney
//     console.log(`Deposited: ₱${amount}`);
// }


//Withdraw Bank Money
// function withdrawBankMoney(amount){
//     if(amount <= bank.bankMoney && amount > 0){
//         bank.bankMoney -= amount;
//         console.log(`Withdrawn: ₱${amount}`);
//     }
//     else{
//         console.log("insufficient Bank Money!");
//     }
// }


// bank.depositBankMoney(300);
// bank.depositBankMoney(400);
// bank.withdrawBankMoney(100);
// bank.checkBankBalance();

function accountControl(){
    // Login
    function loginUser(username, password){
        bank.Accounts.forEach((element, index) => {
            if (element.userName == username && element.password == password){
                isLoggedIn = true;
                userID = index;

                console.log(`Hi! ${element.Name} ${element.lastName}`);
                
            }
        });

        if (!isLoggedIn){
            userID = null;

            console.log("Invalid Credentials!");
        }
    }

    // loginUser("malikotAko", "malikot123");

    // deposit
    function depositMoney(amount){
        if (isLoggedIn){
            bank.Accounts[userID].Balance += amount;
            bank.depositBankMoney(amount);
            console.log(`You deposited ₱${amount.toFixed(2)} to your account`);
        }
        else{
            showError("Please log in!");
        }
    }


    // Checking account balance
    function checkBalance(){
        if (isLoggedIn){
            console.log(`Your account balance is ₱${bank.Accounts[userID].Balance.toFixed(2)}`);
        }
        else{
            showError("Please log in!");
        }
    }


    // Withdraw
    function withdrawMoney(amount){
        if (isLoggedIn){
            if (bank.Accounts[userID].Balance >= amount && amount > 0){
                bank.Accounts[userID].Balance -= amount;
                bank.withdrawBankMoney(amount);

                console.log(`You withdraw ₱${amount.toFixed(2)} to your account`);
            }else{
                showError("You withdraw more than you have in your account!")
            }
        }else{
            showError("Please log in!");
        }
    }

    //  Showing error message
    function showError(msg){
        console.error(msg);
    }
    
    return {
        showError,
        withdrawMoney,
        checkBalance,
        depositMoney,
        loginUser
    }
}




// loginUser("malikotAko", "malikot123");
// depositMoney(500);
// depositMoney(300);
// withdrawMoney(250);
// checkBalance();
// console.log("-----------------------");

var mj = accountControl();
mj.loginUser("uno18", "qwe123");
mj.depositMoney(4500);
mj.depositMoney(15000);
mj.withdrawMoney(5000);
mj.checkBalance();
console.log("-----------------------");

bank.checkBankBalance();
console.log("-----------------------");


// PART 2
function bankControl(callback, data){
    callback(data);
}


// Add User
function addUser(info){
    if (bank.Accounts.some((element) => element.Name == info.Name && element.lastName == info.lastName)){
       
        console.log("You have already account!");
     
    }
    else{
            bank.Accounts.push(info);
            console.log(`${info.Name} ${info.lastName} has been added`);
    }

}

// Remove User
function removeUser(id){
    if (bank.Accounts.length < id){
        console.log("Invalid Command!");
    }
    else{
        isLoggedIn = false;
        userID = null;

        console.log(`${bank.Accounts[id].Name} ${bank.Accounts[id].lastName} has been removed`);
        bank.Accounts.splice(id, 1);
    }
}


bankControl(addUser,{
    Name: "asd",
    lastName: "AD",
    Gender: "Male",
    Address: "Dau",
    Balance: 0,
    pin: 121212,
    userName: "spidey",
    password: "spi123"
})




//console.log(bank.Accounts);

// console.log("-----------------------");

// loginUser("spidey", "spi123");
// depositMoney(100);
// depositMoney(20);
// //withdrawMoney(5000);
// checkBalance();

// console.log("-----------------------");

// removeUser(2);
bankControl(removeUser, 2);
console.log("-----------------------");

// var pangalan  = bank.Accounts.forEach((element) => {
//     console.log(element.Name);
// });

// console.log(pangalan);
// console.log(bank.Accounts.length);

