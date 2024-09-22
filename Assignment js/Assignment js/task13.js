
// Create an object for animal and car
let animal = {
    name: 'Lion',
    sound: 'Roar',
    habitat: 'Savannah'
  };
  
  let car = {
    make: 'Toyota',
    model: 'Corolla',
    year: 2015
  };


// Find the duplicate in a string (using array)
  let str = "hellohello";
let charArray = str.split('');
let duplicates = [];
for (let i = 0; i < charArray.length; i++) {
  let count = 0;
  for (let j = 0; j < charArray.length; j++) {
    if (charArray[i] === charArray[j]) {
      count++;
    }
  }
  if (count > 1) {
    duplicates.push(charArray[i]);
  }
}
console.log(duplicates); // Output: ["l", "o"]


// Reverse a string (using array method)
let str_a = "hello";
let reversedStr = str.split('').reverse().join('');
console.log(reversedStr); // Output: "olleh"


// Find the highest and lowest value in an array
let arr = [12, 45, 7, 23, 56, 89, 34];
let highest = Math.max(...arr);
let lowest = Math.min(...arr);
console.log(highest); // Output: 89
console.log(lowest); // Output: 7


// Sorting of an array (optional):
let arr_B = [12, 45, 7, 23, 56, 89, 34];
arr.sort((a, b) => a - b);
console.log(arr); // Output: [7, 12, 23, 34, 45, 56, 89]

// Display first three elements in an array in UI:

let arr_w= [12, 45, 7, 23, 56, 89, 34];
document.getElementById("output").innerHTML = arr.slice(0, 3).toString();

// Remove the 4th element and add a new element at the same index:

let arr_R = [12, 45, 7, 23, 56, 89, 34];
arr.splice(3, 1); // Remove the element at index 3
arr[3] = "New Element"; // Add a new element at index 3
console.log(arr); // Output: [12, 45, 7, "New Element", 56, 89, 34]