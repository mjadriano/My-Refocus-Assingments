//Patient's Birth Year
const birth_yr = 2020;

//Current Year
let current_yr = new Date().getFullYear();

// Solved Patient's Age
age = current_yr - birth_yr;

//Output
console.log(`Patient's age: ${age}`);


//Patient's Birth Month
let birth_month = 3;

//Current Month
const current_month = new Date().getMonth();

//Subracting the current year by 1
current_yr -= 1;
age = current_yr - birth_yr;

//Condition Statement and the output
if (birth_month <= current_month){
    age++;
    console.log(`Patient's Accurate Age: ${age}`);
}else{
    console.log(`Patient's Accurate Age: ${age}`);
}