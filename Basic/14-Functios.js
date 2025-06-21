// // //Functions
// function getPerson(name, middleName, lastName) {
//     return `Hola, ${name} ${middleName} ${lastName} !`;
// }

// console.log(getPerson("Eduardo", "Gil", "Rivas"));

// //anonimas
// const getPerson2 = function(name, middleName, lastName) {
//     return `Hola, ${name} ${middleName} ${lastName} !`;
// }

// console.log(getPerson2("Eduardo", "Gil", "Rivas"));

// //Arrow functions
// const getPerson3 = (name, middleName, lastName) => {
//     return `Hola, ${name} ${middleName} ${lastName} !`;
// }

// console.log(getPerson3("Eduardo", "Gil", "Rivas"));

// //parameters
// function sum(a, b) {
//     return a + b;
// }
// console.log(sum(5, 10));

// //default parameters
// function sum2(a = 0, b = 0) {
//     return a + b;
// }
// console.log(sum2(5));

// //anidadas

// function externalFunction() {
//     function internalFunction() {
//         return "Hola desde la funcion interna";
//     }
//     return internalFunction();
// }

// console.log(externalFunction());

// //callback functions
function greet(name, callback) {
    console.log(`Hola, ${name}!`);
    callback();
}

greet("Eduardo", function() {
    console.log("Esta es una función de callback que se ejecuta después del saludo.");
});

//ForEach
const numbers = [1, 2, 3, 4, 5];
numbers.forEach(function(number) {
    console.log(`El número es: ${number}`);
});