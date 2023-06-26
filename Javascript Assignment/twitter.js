// Variable (String) - "Presentation of the tweet"
//Condition - check if the tweet has 180 characters or less
//Function - Limit the character

// var tweet = "Ugg the food in the mall is really bad! I hate eating it again";


// console.log(tweet.length);
// if(tweet.length <= 60){
//     console.log(`You tweeted: ${tweet}`);
//     console.log("Can tweet");

// }
// else{
//     console.log(`The limit has beed reached. Instead of 180 characters you get: ${tweet.length}`);
//     console.log("Can't Tweet");
// }

// function checkTweet(tweet, limit = 180, ending = "..."){

//     if(tweet.length > limit){
//         return tweet.substring(0, limit - ending.length) +ending
//     }
//     else{
//         return tweet;
//     }
// }

// var tweet = checkTweet("Ugg the food in the mall is really bad! I hate eating it again");
// console.log(tweet.length);
// console.log(tweet);



//ForEach: loop Array Elements
// const fruit = [ 'apple', 'banana', 'mango'];

// fruit.forEach(function(value){
    
//     if (value == "apple"){
//         console.log(`We found the ${value}`);
//     }
// });




//Filter: Create an array with elements from the initial array
// const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const greaterThanFour = num.filter(function(value){
//     return (value%3 == 1);
// });

// console.log(greaterThanFour);



//Some: tests wheter or not at least one element is true
// const fruit = ['apple', 'banana', 'mango', 'orange'];
// const hasOrange = fruit.every(function(value){
//     return value === "orange";
// });

// console.log(hasOrange);



//Map: creates a new array transforming the old one
// const inventors = [
//     {firstName: "Thomas", lastName: "Edison"},
//     {firstName: "Benjamin", lastName: "Franklin"},
//     {firstName: "Leonardo", lastName: "da Vinci"}
// ];

// const fullName = inventors.map(function(value){
//     return [value.firstName, value.lastName].join(" ");
// });
// console.log(inventors);
// console.log(fullName);


//Reduce: return a new state of an element
const num = [2, 4, 6, 8, 10];
const sum = num.reduce(function(previous, current){
    return previous + current;
});

console.log(sum);