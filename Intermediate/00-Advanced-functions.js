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