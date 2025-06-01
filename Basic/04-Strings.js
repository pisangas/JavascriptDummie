//Strings


// This code demonstrates how to create a string variable and concatenate it with another string.
let myName = "Eduardo"
let greeting = "Hello, " + myName + "! Welcome to the JavaScript world.";
console.log(greeting);

//Length of a string
console.log("Length of the string:", greeting.length);

//Character at a specific index
console.log("Character at index 12:", greeting.charAt(12)); // 'E'

//Commons methods
//Converting to uppercase
console.log("Uppercase:", greeting.toUpperCase());
//Converting to lowercase
console.log("Lowercase:", greeting.toLowerCase());
//Finding the index of a substring
console.log("Index of 'Eduardo':", greeting.indexOf("Eduardo")); 
