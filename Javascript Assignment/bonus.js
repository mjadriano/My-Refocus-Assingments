const arr = [
    "Web Developer",
    "Refocus",
    "Web Developer",
    "Web Developer",
    "Refocus",
    "Awesome"
];

const newArr = {}

arr.forEach((element) => {
    newArr[element] = (newArr[element] || 0) + 1;
})

console.log(newArr);


let invoiceList =[
    "invoice 008",
    "invoice 007",
    "invoice 006",
    "invoice 005",
];

// function reverseList(){
//     let invoiceListReverse = invoiceList.reverse().join(" ");
//     console.log(invoiceListReverse);
// }

// invoiceList.push("invoice 004");
// invoiceList.push("invoice 003");
// invoiceList.push("invoice 002");
// invoiceList.push("invoice 001");


// console.log(invoiceList.join(" "));
// reverseList();