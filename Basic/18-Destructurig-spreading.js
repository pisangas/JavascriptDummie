//Desestrucuracion
myArray = [1, 2, 3, 4, 5];
let persona = {
    nombre: "Juan",
    edad: 30,
    profesion: "Ingeniero",
    saludar: function() {
        console.log(`Hola, mi nombre es ${this.nombre}`);
    }
};

myValue = myArray[0];
console.log(myValue); // Muestra 1

myname = persona.nombre;
console.log(myname); // Muestra "Juan"

//Sintaxis en arrays
let [a, b, c] = myArray;
console.log(a); // Muestra 1
console.log(b); // Muestra 2
console.log(c); // Muestra 3

//Sintaxis en arrays by default
let [d = 0, e = 0, f = 0, g = 0, h = 0, i= 0] = myArray;
console.log(d); // Muestra 1
console.log(e); // Muestra 2
console.log(f); // Muestra 3
console.log(g); // Muestra 4
console.log(h); // Muestra 5
console.log(i); // Muestra undefined

//ingnorar variables
let [x, , , , y] = myArray;
console.log(x); // Muestra 1
console.log(y); // Muestra 5

//Sintaxis objetos
let { nombre, edad, profesion } = persona;
console.log(nombre); // Muestra "Juan"
console.log(edad); // Muestra 30

// Sintaxis objetos by default
let { nombre: myName = "Desconocido", edad: myAge = 0, profesion: myProfession = "Desconocido" } = persona;
console.log(myName); // Muestra "Juan"
console.log(myAge); // Muestra 30
console.log(myProfession); // Muestra "Ingeniero"