
// Extract first five letters from a string ('gfuh ieiuei '):
let str = 'gfuh ieiuei';
let firstFiveLetters = str.slice(0, 5);
console.log(firstFiveLetters); // Output: "gfuh "


// Get the length of a string and make it uppercase ('hduej dij')
let str_1 = 'hduej dij';
let length = str.length;
console.log(length); // Output: 8
let upperCaseLength = length.toString().toUpperCase();
console.log(upperCaseLength); // Output: "8"

// Take a string, make it lowercase and trim it ('bijj jdo '):
let str_2 = ' biji jdo ';
let lowerCaseStr = str.toLowerCase();
console.log(lowerCaseStr); // Output: "biji jdo"
let trimmedStr = lowerCaseStr.trim();
console.log(trimmedStr); // Output: "biji jdo" (note: there is no trailing whitespace to trim)

// Replace specified word in a string ('', ''):

let str_4 = 'hello world';
let replacedStr = str.replace('world', 'earth');
console.log(replacedStr); // Output: "hello earth"

// Random statements in implicit coercion://
console.log(89 + 'hello' + 90 / 9); // Output: "89hello10"
console.log(true + ''); // Output: "true"
console.log(null + ''); // Output: ""
console.log(undefined + ''); // Output: "undefined"
console.log(NaN + ''); // Output: "NaN"
console.log(Infinity + ''); // Output: "Infinity"