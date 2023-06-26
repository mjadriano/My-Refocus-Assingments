// const uniqueID = Math.random().toFixed(5).replace("0.", "").toString();
// let date = new Date().toUTCString().slice(0, 16);
// // console.log(date);
// // const randomId = function() {
// //     return Math.random().toString(36).substring(2, 7);
// //   };

// // console.log(Math.random().toString(36).substring(2, 5));
var bankAccount = {
        "bankAccountID" : Math.random().toString(36).substring(2, 7),
        "accountNumber" : 12345,
        "credentials": [
            {
                "username": "test",
                "password": "test123",
                "pin" : 456
            }
        ],
        "balance" : 2000,
        "createdAt" : new Date().toUTCString().slice(0, 16)
}



var userAccount = {
    "bankAccount" : bankAccount,
    "debitCard" : 123456789,
    "firstName" : "Uno",
    "lastName" : "Adriano",
    "birthday" : "June 1, 2000",
    "validID" : [
        {
            "id" : "Passport",
            "idNumber" : "21451"
        },
        {
            "id" : "Drivers License",
            "idNumber" : "200145"
        }
    ],
    "address" : "Guagua, Pampanga"
}


var login = false;
function userControl(){

    function getBankAccountDetails(username, password){
        userAccount.bankAccount.credentials.forEach((element) => {
            if(element.username == username && element.password == password){
                login = true;
                console.log(userAccount);
            }
        })

        if(userAccount.bankAccount.credentials.some((element) => element.username != username || element.password != password)){
            console.log("Wrong username or password!");
        }
    }

    function depositMoney(amount, accountNumber){
        if(userAccount.bankAccount.accountNumber == accountNumber){
            userAccount.bankAccount.balance += amount;
        }
        console.log(`Hello! ${userAccount.firstName} ${userAccount.lastName}, You deposited on your account of amount: ₱${amount} your new total balance is ₱${userAccount.bankAccount.balance}`);
    }

    function withdrawMoney(amount, accountNumber){
        if(login){
            if(userAccount.bankAccount.accountNumber == accountNumber){
                if(userAccount.bankAccount.balance - amount >= 0){
                    userAccount.bankAccount.balance -= amount;
                    console.log(`Hello! ${userAccount.firstName} ${userAccount.lastName}, You withdraw on your account of amount: ₱${amount} your new total balance is ₱${userAccount.bankAccount.balance}`)
                } else {
                    console.log("Invalid Transaction!");
                }
            }
        }
        else {
            console.log("Log in first!");
        }
    }

    return {
        getBankAccountDetails,
        depositMoney,
        withdrawMoney
    }
    
}



var cnt = userControl();
cnt.getBankAccountDetails("test", "test123");
cnt.depositMoney(300, 12345);
cnt.withdrawMoney(500, 12345);