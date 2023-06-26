//Parameters and Arguments


// var a = 50;

// function calculate(num1){
//     let result = num1 * a;
//     return result;
// }

// var output = calculate(5);
// console.log(output);

// function showName(status, name, message){

// }


// function myFunc(theObject) {
//     theObject.make = "Toyota";
//   }
  
//   const mycar = {
//     make: "Honda",
//     model: "Accord",
//     year: 1998,
//   };
  
//   // x gets the value "Honda"
//   const x = mycar.make;
//   console.log(x);
//   // the make property is changed by the function
//   myFunc(mycar);
//   // y gets the value "Toyota"
//   const y = mycar.make;
//   console.log(y);


// function Person(name, age, sex) {
//     this.name = name;
//     this.age = age;
//     this.sex = sex;
//   }
  
// const rand = new Person("Rand McKinnon", 33, "M");
// const ken = new Person("Ken Jones", 39, "M");

// console.log(rand);
// console.log(ken);

// const numbers = [4, 3, 2];;

// var num = numbers.map((element) => {
//     return element;
// });

// console.log(numbers);

// console.log(num);

const arr = ['ref', 'go', 'ref', 'go', 'go', 'hey'];

const count = {};

arr.forEach(element => {
    console.log(element);
    console.log(count[element]);
    count[element] = (count[element] || 0) + 1;
    console.log(count[element]);
    console.log("========")
});

// 👇️ {one: 3, two: 2, three: 1}
console.log(count);

// const num = [2, 4, 6, 8, 10];

// const sum  = num.reduce((prev, next) => {
//     console.log(prev);
//     console.log(next);
//     console.log("========");
//     return prev + next;
// })

// console.log(sum);

// let say = (n) => console.log(n);

// say("Hello!");

// let array = [3, 4, 6, 3];
// console.log(array[2]);

// const arr = ['ref', 'go', 'ref', 'go', 'go', 'hey'];

// console.log(arr[go]);