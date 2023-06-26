// var myText = "Hi this is really cool";
// console.log(myText);

// console.log("Hello");
// function calculate(num1, num2){
//     return num1 + num2;
// }

// console.log(calculate(50, 20));

// const flowers = ["rose", "star gazer", "tulips", "sun flower"];

// for (i = 0; i < flowers.length; i++){
//     console.log(flowers[i].length);
// }

function func1(arr, callback){

    console.log(typeof(arr[0]) == 'number');
    if(arr.every((item) => typeof(item) == 'number')){
        console.log(true)
        return arr.reduce((total, num)=> total + num)
    }
    else{
        return callback(arr);
    }
}

function func2(arr){
    return arr.join(" ")
}

const result = func1([4,3], func2);
console.log(result)















// function quickSort(array) {
//     if (array.length <= 1) {
//       return array;
//     }
  
//     const pivot = array[Math.floor(array.length / 2)];
    
//     const leftArray = [];
//     const rightArray = [];
//     const equal = [];
  
//     for (let element of array) {
//       if (element < pivot) {
//         leftArray.push(element);
//       } else {
//         rightArray.push(element);
//       }
//     }
//     // return {leftArray, rightArray};
//     return [...quickSort(leftArray), equal, ...quickSort(rightArray)];
//   }
  
// const array = [5, 3, 1, 2, 4];
// const sortedArray = quickSort(array);
  
// console.log(sortedArray); // [1, 2, 3, 4, 5]

// function quickSort(element){
//   if (array.length <= 1) {
//     return array;
//   }
//   for(var i = 0; array.length )
// }

// console.log(array.map(quickSort));

// function quickSort(origArray) {
// 	if (origArray.length <= 1) { 
// 		return origArray;
// 	} else {

// 		var left = [];
// 		var right = [];
// 		var newArray = [];
// 		var pivot = origArray.pop();
// 		var length = origArray.length;

// 		for (var i = 0; i < length; i++) {
// 			if (origArray[i] <= pivot) {
// 				left.push(origArray[i]);
// 			} else {
// 				right.push(origArray[i]);
// 			}
// 		}

// 		return newArray.concat(quickSort(left), pivot, quickSort(right));
// 	}
// }

// var myArray = [3, 0, 2, 5, -1, 4, 1 ];

// console.log("Original array: " + myArray);
// var sortedArray = quickSort(myArray);
// console.log("Sorted array: " + sortedArray);


// function quickSort(arr) {
//   if (arr.length <= 1) {
//     return arr;
//   }

//   const pivot = arr[Math.floor(arr.length / 2)];
//   const lesser = [];
//   const equal = [];
//   const greater = [];

//   for (let element of arr) {
//     if (element < pivot) {
//       lesser.push(element);
//     } else if (element > pivot) {
//       greater.push(element);
//     } else {
//       equal.push(element);
//     }
//   }

//   return [...quickSort(lesser), ...equal, ...quickSort(greater)];
// }

// // Example usage:
// const unsortedArray = [5, 3, 8, 4, 2, 9, 1, 6, 7];
// const sortedArray = quickSort(unsortedArray);

// console.log(sortedArray);

// function quickSort(array) {
//   if (array.length <= 1) {
//     return array;
//   }

//   const pivot = array[Math.floor(array.length / 2)];
//   const leftArray = [];
//   const rightArray = [];

//   for (let i = 0; i < array.length; i++) {
//     if (array[i] < pivot) {
//       leftArray.push(array[i]);
//     } else {
//       rightArray.push(array[i]);
//     }
//   }
//   return rightArray;
//   //return [...quickSort(leftArray), pivot, ...quickSort(rightArray)];
// }
// const array = [5, 3, 1, 2, 4];
// const sortedArray = quickSort(array);

// console.log(sortedArray); // [1, 2, 3, 4, 5]

// function insertionSort(arr) {
//   for (let i = 1; i < arr.length; i++) {
    
//     let current = arr[i];
    
//     let j = i - 1;
    
//     while (j >= 0 && arr[j] > current) {
//       console.log(j)
//       arr[j + 1] = arr[j];
//       console.log(arr[j+1]);
//       j--;
//       console.log(j)
//       console.log("============")
//     }
    
//     arr[j + 1] = current;
//     console.log("============")
    
//   }

//   return arr;
// }

// const unsortedArray = [101, 13, 15, 12, 18];
// const sortedArray = insertionSort(unsortedArray);
// console.log(sortedArray);





// function mergeSort(arr) {
//   if (arr.length <= 1) {
//     return arr;
//   }

//   const middle = Math.floor(arr.length / 2);
//   const left = arr.slice(0, middle);
//   const right = arr.slice(middle);

//   return merge(mergeSort(left), mergeSort(right));
// }

// function merge(left, right) {
//   let merged = [];
//   let leftIndex = 0;
//   let rightIndex = 0;

//   while (leftIndex < left.length && rightIndex < right.length) {
//     if (left[leftIndex] < right[rightIndex]) {
//       merged.push(left[leftIndex]);
//       leftIndex++;
//     } else {
//       merged.push(right[rightIndex]);
//       rightIndex++;
//     }
//   }

//   // Add remaining elements from left and right subarrays
//   return merged.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
// }

// // Example usage:
// const unsortedArray = [5, 3, 8, 4, 2, 9, 1, 6, 7];
// const sortedArray = mergeSort(unsortedArray);

// console.log(sortedArray);

// function compareObjects(obj1, obj2) {
//   if (obj1 === obj2) {
//     return true;
//   }

//   if (typeof obj1 !== "object" || typeof obj2 !== "object") {
//     return false;
//   }

//   const keys1 = Object.keys(obj1);
//   const keys2 = Object.keys(obj2);

//   if (keys1.length !== keys2.length) {
//     return false;
//   }

//   for (const key of keys1) {
//     if (obj1[key] !== obj2[key]) {
//       return false;
//     }
//   }

//   return true;
// }

// const obj1 = {
//   name: "John Doe",
//   age: 30,
//   address: "123 Main Street"
// };

// const obj2 = {
//   name: "John Doe",
//   age: 30,
//   address: "123 Main Street"
// };

// const result = compareObjects(obj1, obj2);

// console.log(result); // true




// function compareObjects(obj1, obj2) {
//   const keys1 = Object.keys(obj1);
//   const keys2 = Object.keys(obj2);

//   if (keys1.length !== keys2.length) {
//     return false;
//   }
  

//   for (let key of keys1) {
//     if (typeof obj1[key] === 'object' && typeof obj2[key] === 'object') {
//       if (!compareObjects(obj1[key], obj2[key])) {
//         return false;
//       }
//     } else if (obj1[key] !== obj2[key]) {
//       return false;
//     }
//   }

//   return true;
// }

// // Example usage:
// const obj1 = { a: 1, b: 2, c: { x: 3, y: 4 } };
// const obj2 = { a: 1, b: 2, c: { x: 3, y: 4 } };
// const obj3 = { a: 1, b: 2, c: { x: 3, y: 5 } };

// console.log(compareObjects(obj1, obj2)); // Output: true
// console.log(compareObjects(obj1, obj3)); // Output: false



// function measureExecutionTime(fn) {
//   const startTime = performance.now();
//   fn();
//   const endTime = performance.now();
//   const executionTime = endTime - startTime;
//   console.log(`Execution time: ${executionTime} milliseconds`);
// }

// // Example usage:
// function myFunction() {
//   // Code to be measured
//   for (let i = 0; i < 1000000; i++) {
//     // Some computation
//   }
// }

// measureExecutionTime(myFunction);



// class Cylinder {
//   constructor(radius, height) {
//     this.radius = radius;
//     this.height = height;
//   }

//   getVolume() {
//     const volume = Math.PI * Math.pow(this.radius, 2) * this.height;
//     return volume.toFixed(4); // Round to four decimal places
//   }
// }

// // Example usage:
// const cylinder = new Cylinder(5, 10); // Create a cylinder with radius 5 and height 10
// const volume = cylinder.getVolume(); // Calculate the volume
// console.log(`Volume of the cylinder: ${volume}`); // Output the volume