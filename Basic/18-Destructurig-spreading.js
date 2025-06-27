//Destrucuracion
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