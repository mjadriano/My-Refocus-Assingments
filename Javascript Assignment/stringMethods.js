
let sen = "there is a stromg coming to the East of the Philippines";
let sen2 = "no more rainy days here, sun is about to show up";

// function lookingForUpperCase(para){
//     if(/[A-Z]/g.test(para)){
//         let upperLetter = para.replace(/[^A-Z]/g, "").slice(0, 1);
//         console.log(`The Letter "${upperLetter}" is the first upper-case letter in the sentence.`);
//     } else {
//         console.log("there are no upper-case letters.");
//     }
// }

const upper = sen.match(/[A-Z]/g);

const letter = upper.find(element => element == element.toUpperCase());

// function checkUpper(sen){
//     return sen.match(/[A-Z]/g);
    
// }

console.log(letter);
