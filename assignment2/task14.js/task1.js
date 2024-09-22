// Problem 1: Display even numbers up to n number

const n = parseInt(prompt("Enter a number: "));
for (let i = 2; i <= n; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

// Check if a character is a vowel or consonant

const char = prompt("Enter a character: ");
if (char.toLowerCase() === 'a' || char.toLowerCase() === 'e' || char.toLowerCase() === 'i' || char.toLowerCase() === 'o' || char.toLowerCase() === 'u') {
    console.log("Vowel");
} else {
    console.log("Consonant");
}

// Count of even and odd numbers from 1 to 999
let evenCount = 0;
let oddCount = 0;
for (let i = 1; i <= 999; i++) {
    if (i % 2 === 0) {
        evenCount++;
    } else {
        oddCount++;
    }
}
console.log("Even numbers:", evenCount);
console.log("Odd numbers:", oddCount);

// Count occurrence of a particular character in a string

const str = "hello";
const char_1 = "l";
let count = 0;
for (let i = 0; i < str.length; i++) {
    if (str[i] === char_1) {
        count++;
    }
}
console.log("Count of", char_1, "in", str, "is:", count);

// Sum and average of array elements

const arr = [1, 9, 8];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}
const average = sum / arr.length;
console.log("Sum:", sum);
console.log("Average:", average);

//  Largest number in an array (using loops
const arr_1 = [1, 9, 8, 4, 7];
let maxNum = arr_1[0];
for (let i = 1; i < arr_1.length; i++) {
    if (arr_1[i] > maxNum) {
        maxNum = arr_1[i];
    }
}
console.log("Largest number:", maxNum);
