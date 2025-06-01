//primeros pasos de JavaScript

// 3. Declara variables con valores asociados a todos los datos de tipo primitivos
let stringValue = "Hola, mundo"; // String
let numberValue = 42; // Number
let booleanValue = true; // Boolean
let undefinedValue; // Undefined
let nullValue = null; // Null
let symbolValue = Symbol("un símbolo"); // Symbol
let bigIntValue = BigInt(123456789012345678901234567890); // BigInt

// 4. Imprime por consola el valor de todas las variables
console.log("String:", stringValue);
console.log("Number:", numberValue);
console.log("Boolean:", booleanValue);
console.log("Undefined:", undefinedValue);
console.log("Null:", nullValue);
console.log("Symbol:", symbolValue);
console.log("BigInt:", bigIntValue);


// 5. Imprime por consola el tipo de todas las variables
console.log(typeof(stringValue)); // String
console.log(typeof(numberValue)); // Number 
console.log(typeof(booleanValue)); // Boolean
console.log(typeof(undefinedValue)); // Undefined
console.log(typeof(nullValue)); // Null
console.log(typeof(symbolValue)); // Symbol
console.log(typeof(bigIntValue)); // BigInt


// 6. A continuación, modifica los valores de las variables por otros del mismo tipo
stringValue = "Adiós, mundo"; // Modificando el valor del String
numberValue = 100; // Modificando el valor del Number
booleanValue = false; // Modificando el valor del Boolean
undefinedValue = undefined; // Modificando el valor del Undefined (sigue siendo undefined)
nullValue = null; // Modificando el valor del Null (sigue siendo null)
symbolValue = Symbol("otro símbolo"); // Modificando el valor del Symbol
bigIntValue = BigInt(987654321098765432109876543210); // Modificando el valor del BigInt

// 7. A continuación, modifica los valores de las variables por otros de distinto tipo
stringValue = 12345; // Cambiando el String a un Number
numberValue = "Cincuenta y dos"; // Cambiando el Number a un String 
booleanValue = 1; // Cambiando el Boolean a un Number (1 es true)
undefinedValue = true; // Cambiando el Undefined a un Boolean
nullValue = "Ahora es un String"; // Cambiando el Null a un String
symbolValue = 42; // Cambiando el Symbol a un Number
bigIntValue = false; // Cambiando el BigInt a un Boolean

// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos
const constantString = "Constante de texto"; // String
const constantNumber = 3.14; // Number
const constantBoolean = false; // Boolean
const constantUndefined = undefined; // Undefined
const constantNull = null; // Null
const constantSymbol = Symbol("constante símbolo"); // Symbol
const constantBigInt = BigInt(12345678901234567890); // BigInt

// 9. A continuación, modifica los valores de las constantes
//constantString = "Nuevo texto"; // Esto producirá un error porque las constantes no se pueden modificar
// constantNumber = 2.71; // Esto también producirá un error
// constantBoolean = true; // Esto también producirá un error
// constantUndefined = "Ahora es un String"; // Esto también producirá un error
// constantNull = 42; // Esto también producirá un error
// constantSymbol = Symbol("nuevo símbolo"); // Esto también producirá un error
// constantBigInt = BigInt(98765432109876543210); // Esto también producirá un error

// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarse