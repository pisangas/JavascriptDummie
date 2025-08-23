//Funciones avanzadas

//ciudadanos de primera clase
//1. Asignacion a constantes
const greet = function (name){
    console.log(`Hola ${name}`);
}

greet('Juan');

//2. Funciones como parametros de funcion
function processGreeting(greetFunction, name) {
    greetFunction(name);
}

processGreeting(greet, "Pedro");

//3. Funcines que retornan funciones
function returnGreeting(name){
    return greet;
}

const greet2 = returnGreeting();

greet2("retornno funcion");

//Arrow Functions
//1. Implicit return
const multiply = (a, b) => a * b;

console.log(multiply(2, 3));

//This - lexico
const car = {
    brand: 'Toyota',
    model: 'Corolla',
    move: function() {
        console.log(`El ${this.brand} ${this.model} se mueve`);
    },
    stop: () => {
        console.log(`El ${this.brand} ${this.model} se detuvo`);
    }

};

car.move();
//car.stop();

//IIFE Inmediately Invoked Function Expression - la importancia de finalizar las instrucciones anteriores con (;)
// IIFE es una funcion que se ejecuta inmediatamente despues de ser definida
// Se usa para crear un scope privado y evitar contaminacion del scope global

//IIFE Classic
(function (){
    console.log("IIFE Classic");
})();

(() => {
    console.log("IIFE Classic Arrow");
})();

//REST (...) parameters - es posible combinarlos y los convierte en array
function sum(...numbers) { 
    let result = 0;
    for (let number of numbers) {
        result += number;
    }   
    return result;
}

console.log(sum(1, 2, 3, 4, 5)); //15

//SPREAD (...) operator
function displayInfo(name, age, ...hobbies) {
    console.log(`Nombre: ${name}, Edad: ${age}`);
    console.log(`Hobbies: ${hobbies.join(', ')}`);
}

displayInfo("Egil", 30, "Leer", "Programar", "Viajar");

//Clousure - es una funcion que recuerda el entorno en el que fue creada
function makeCounter() {
    let count = 0; //variable privada
     return  function() {
        count++;
        console.log(`valor del contador: ${count}`);        
    }    
}

const counter1 = makeCounter()
const counter2 = makeCounter()
counter1(); //1
counter1(); //2

//Recursividad - Cuando una funcion se llama a si misma, debe tener una condicion de salida de lo contrario nunca acabaria de ejecutarse y agotaria la pila de llamadas
function factorial(n) {
    if (n === 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

console.log(factorial(5)); //120

//Funciones parciales - Permite crear una nueva funcion con algunos de los parametros ya definidos
function sumPartial(a){
    return function(b, c){
        return (a + b) * c;
    }
}
const sumWith5 = sumPartial(5)(10, 2); //30
console.log(sumWith5);

//Currying - tecnica de transformar una funcion con multiples argumentos en una secuencia de funciones que toman un solo argumento
function currySum(a) {
    return function(b) {
        return function(c) {
            return a + b + c;
        }
    }
}
const curriedResult = currySum(1)(2)(3); //6
console.log(curriedResult);

const currySumAB = currySum(1)(2); //funcion que espera el tercer argumento
console.log(currySumAB(3)); 
console.log(currySumAB(4)); 
console.log(currySumAB(10));

//callbacks - funcion que se pasa como argumento a otra funcion y se ejecuta dentro de esa funcion
function processData(data, callback) {
    const result = sum(...data);
    callback(result);
}

function processResult(result) {
    console.log(result);
}

function processResult1(result) {
    console.log(`El resultado es: ${result}`);
}

processData([1, 2, 3, 4, 5], processResult);
processData([1, 2, 3, 4, 5], processResult1);
processData([1, 2, 3, 4, 5], result => console.log(`Resultado con arrow function: ${result}`));

