//operators

let a = 10 
let b = 20

// Arithmetic Operators
console.log("Arithmetic Operators");
console.log("Addition:", a + b); // Addition
console.log("Subtraction:", a - b); // Subtraction
console.log("Multiplication:", a * b); // Multiplication
console.log("Division:", a / b); // Division
console.log("Modulus:", a % b); // Modulus
console.log("Exponentiation:", a ** 2); // Exponentiation
console.log("Increment:", ++a); // Increment
console.log("Decrement:", --b); // Decrement

// Assignment Operators
console.log("\nAssignment Operators");
let myVariable = 2
console.log("Initial value:", myVariable);
myVariable += 2; // Add and assign
console.log("After += 2:", myVariable);

// is the same case for other assignment operators
myVariable -= 1; // Subtract and assign
console.log("After -= 1:", myVariable);
myVariable *= 3; // Multiply and assign
console.log("After *= 3:", myVariable);
myVariable /= 2; // Divide and assign
console.log("After /= 2:", myVariable);
myVariable %= 2; // Modulus and assign
console.log("After %= 2:", myVariable);
myVariable **= 2; // Exponentiation and assign
console.log("After **= 2:", myVariable);
myVariable <<= 1; // Left shift and assign
console.log("After <<= 1:", myVariable);
myVariable >>= 1; // Right shift and assign
console.log("After >>= 1:", myVariable);
myVariable >>>= 1; // Unsigned right shift and assign

//Comparation operators
console.log("\nComparison Operators");
console.log("Equal:", a == b); // Equal
console.log("Not Equal:", a != b); // Not equal
console.log("Strict Equal:", a === b); // Strict equal
console.log("Strict Not Equal:", a !== b); // Strict not equal
console.log("Greater Than:", a > b); // Greater than
console.log("Less Than:", a < b); // Less than
console.log("Greater Than or Equal:", a >= b); // Greater than or equal
console.log("Less Than or Equal:", a <= b); // Less than or equal

// Logical Operators
console.log("\nLogical Operators");
console.log("AND:", a > 5 && b < 30); // Logical AND
console.log("OR:", a > 15 || b < 30); // Logical OR
console.log("NOT:", !(a > 5)); // Logical NOT
