// 1. Crea una función que reciba dos números y devuelva su suma
function sum(a, b) {
    return a + b;}
console.log(sum(5, 10));

// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos
let myArrayNumbers = [1, 2, 3, 4, 5, 6, 7, 81, 9, 10];
function findMaxNumber(array) {
    return Math.max(...array);
}

console.log(findMaxNumber(myArrayNumbers));

// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene
let myString = "Cuantas vocales tengo en esta cadena de texto";
function countVowels(str) {
    const vowels = str.match(/[aeiou]/g);
    return vowels ? vowels.length : 0;
}
console.log(countVowels(myString));

// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas
let myArrayStrings = ["hola", "mundo", "javascript", "es", "genial"];
function toUpperCaseArray(array) {
    return array.map(str => str.toUpperCase());
}
console.log(toUpperCaseArray(myArrayStrings));

// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}
console.log(isPrime(7)); // true
console.log(isPrime(10)); // false

// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos
let myFirstArray = [1, 2, 3, 4, 5];
let mySecondArray = [4, 5, 6, 7, 3];
function findCommonElements(array1, array2) {
    return array1.filter(value => array2.includes(value));
}
console.log(findCommonElements(myFirstArray, mySecondArray));

// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares
let myArrayNumbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function sumPairsNumbers(array){
    return array.reduce((sum, num) => {
        if (num % 2 === 0) {
            return sum + num;
        }
        return sum;
    }, 0);    
}
console.log(sumPairsNumbers(myArrayNumbers2));

// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado
let mySquareArray = [2, 3, 4, 5];
function squarNUmbers(array){
    return array.map(num => num * num);
}
console.log(squarNUmbers(mySquareArray));

// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso
let myText = "Hola mundo desde JavaScript";
function reverseWords(str) {
    return str.split(' ').reverse().join(' ');
} 
console.log(reverseWords(myText));