// 1. Concatena dos cadenas de texto
let string1 = "Jeremiah, blow the fire";
let string2 = "First you blow it gently!";

console.log(`${string1} ${string2}`); // Concatenates two strings

// 2. Muestra la longitud de una cadena de texto
let text = string1 + string2;
console.log("Length of the concatenated string:", text.length); // Displays the length of the concatenated string

// 3. Muestra el primer y último carácter de un string

let firstChar = text.charAt(0); // First character
let lastChar = text.charAt(text.length - 1); // Last character
console.log(`First character: ${firstChar}, Last character: ${lastChar}`); // Displays the first and last characters of the string

// 4. Convierte a mayúsculas y minúsculas un string

console.log("Uppercase:", text.toUpperCase()); // Converts the string to uppercase
console.log("Lowercase:", text.toLowerCase()); // Converts the string to lowercase

// 5. Crea una cadena de texto en varias líneas

console.log(`This is a multi-line string.
It can span multiple lines`); // Creates a multi-line string using template literals

// 7. Reemplaza todos los espacios en blanco de un string por guiones
console.log(text.replace(/ /g, "-")); // Replaces all spaces in the string with hyphens

// 8. Comprueba si una cadena de texto contiene una palabra concreta
console.log(text.includes("blow")); // Checks if the string contains the word "blow"

// 9. Comprueba si dos strings son iguales

string1 == string2 ? 
    console.log("The strings are equal") : 
    console.log("The strings are not equal"); // Checks if two strings are equal

// 10. Comprueba si dos strings tienen la misma longitud

string1.length === string2.length ?
    console.log("The strings have the same length") : 
    console.log("The strings do not have the same length"); // Checks if two strings have the same length

// 11. Extrae una subcadena de un string
let substring = text.substring(0, 20); // Extracts a substring from the first 20 characters
console.log("Extracted substring:", substring); // Displays the extracted substring