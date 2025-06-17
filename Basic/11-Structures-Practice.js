// 1. Crea un array que almacene cinco animales
let MyAnimals = ["Perro", "Gato", "Elefante", "Tigre", "León"];
console.log(MyAnimals); // Imprime el array actualizado

// 2. Añade dos más. Uno al principio y otro al final
MyAnimals.unshift("Loro"); // Añade "Loro" al principio
MyAnimals.push("Conejo"); // Añade "Conejo" al final
console.log(MyAnimals); // Imprime el array actualizado

// 3. Elimina el que se encuentra en tercera posición
MyAnimals.splice(2, 1); // Elimina el animal en la tercera posición (índice 2)
console.log(MyAnimals); // Imprime el array actualizado

// 4. Crea un set que almacene cinco libros
let MyBooks = new Set(["1984", "El Principito", "Cien Años de Soledad", "Orgullo y Prejuicio", "Crimen y Castigo"]);
console.log(MyBooks); // Imprime el set de libros

// 5. Añade dos más. Uno de ellos repetido
MyBooks.add("El Hobbit"); // Añade "El Hobbit"
MyBooks.add("1984"); // Añade "1984" de nuevo (repetido)

// 6. Elimina uno concreto a tu elección
MyBooks.delete("Cien Años de Soledad"); // Elimina "Cien Años de Soledad"
console.log(MyBooks); // Imprime el set actualizado

// 7. Crea un mapa que asocie el número del mes a su nombre
let MyMonths = new Map([
    [1, "Enero"],
    [2, "Febrero"],
    [3, "Marzo"],
    [4, "Abril"],
    [5, "Mayo"],
    [6, "Junio"],
    [7, "Julio"],
    [8, "Agosto"],
    [9, "Septiembre"],
    [10, "Octubre"],
    [11, "Noviembre"],
    [12, "Diciembre"]
]);

// 8. Comprueba si el mes número 5 existe en el map e imprime su valor
if (MyMonths.has(5)) {
    console.log(`El mes número 5 es: ${MyMonths.get(5)}`); // Imprime "Mayo"
}

// 9. Añade al mapa una clave con un array que almacene los meses de verano
MyMonths.set("Verano", ["Junio", "Julio", "Agosto"]);
console.log(MyMonths.get("Verano")); // Imprime los meses de verano

// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map 
let MyArray = ["Rojo", "Verde", "Azul", "Amarillo", "Rojo"]; // Array con un color repetido
let MyColorSet = new Set(MyArray); // Transforma el array a un set
