// 1. Crea un función que utilice error correctamente
function meetMe(name, age){
    if (age < 0) {
        console.error("Error: La edad no puede ser negativa.");
    } else {
        console.log(`Hola, ${name}. Tu edad es ${age}.`);
    }
}
meetMe("Eduardo", -5);
meetMe("Ana", 25);

// 2. Crea una función que utilice warn correctamente
function checkAge(age) {
    if (age < 18) {
        console.warn("Advertencia: Eres menor de edad.");
    }
}
checkAge(16);


// 3. Crea una función que utilice info correctamente
function displayInfo(name, age) {
    console.info(`Información: Nombre - ${name}, Edad - ${age}`);
}

displayInfo("Pedro", 30);


// 4. Utiliza table
let users = [
    {name: "John", age: 30},
    {name: "Ana", age: 25},
    {name: "Pedro", age: 35}
];

function displayUsers(users) {
    console.table(users);
}

displayUsers(users);

// 5. Utiliza group
function displayUserDetails(name, age) {
    console.group("Detalles del Usuario");
    console.log(`Nombre: ${name}`);
    console.log(`Edad: ${age}`);
    console.groupEnd("Detalles del Usuario");
}

displayUserDetails("Eduardo", 28);

// 6. Utiliza time
function measureExecutionTime() {
    console.time("Tiempo de ejecución");
    for (let i = 0; i < 1000000; i++) {
        // Simulación de trabajo
    }
    console.timeEnd("Tiempo de ejecución");
}

measureExecutionTime();

// 7. Valida con assert si un número es positivo
let numero = -5;
console.assert(numero >= 0, "Error: El número debe ser positivo.");

// 8. Utiliza count
let array = [1, 2, 3, 1, 2, 1];

function countOccurrences(array) {
    array.forEach(item => {
        console.count(`Elemento: ${item}`);
    });
}

countOccurrences(array);

// 9. Utiliza trace
function functionA() {
    functionB();
}
function functionB() {
    console.trace("Rastreo de la función B");
}

functionA();