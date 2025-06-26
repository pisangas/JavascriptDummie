//Objectos

//Sintaxis
let persona = {
    nombre: "Juan",
    edad: 30,
    profesion: "Ingeniero",
    saludar: function() {
        console.log(`Hola, mi nombre es ${this.nombre}`);
    }
};

console.log(persona.edad); // 30
console.log(persona["edad"]); // 30
console.log(persona.profesion); // Ingeniero
console.log(persona["profesion"]); // Ingeniero
persona.saludar(); // Hola, mi nombre es Juan

//Modificar propiedades
console.log(typeof persona.edad); // 30
persona.edad = "31"; // Cambiando el tipo de dato de edad a string
console.log(typeof persona.edad); // 31

//eliminar propiedades
delete persona.profesion; // Elimina la propiedad profesion
console.log(persona.profesion); // undefined
console.log(persona); // { nombre: 'Juan', edad: '31', saludar: [Function: saludar] }

//agregar propiedades
persona.apellido = "Pérez"; // Agrega una nueva propiedad apellido
console.log(persona.apellido); // Pérez