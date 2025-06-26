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

//anidar objetos
let estudiante = {
    nombre: "Ana",
    edad: 22,
    curso: {
        nombreCurso: "JavaScript",
        duracion: "3 meses",
        profesor: {
            nombre: "Carlos",
            experiencia: "5 años"
        }
    },
    saludar: function() {
        console.log(`Hola, soy ${this.nombre} y estudio ${this.curso.nombreCurso}`);
    }
};
console.log(estudiante);
console.log(estudiante.curso.nombreCurso); // JavaScript
console.log(estudiante.curso.profesor.nombre); // Carlos

//igualdad de objects
let personaSame = {
    nombre: "Juan",
    edad: 30,
    profesion: "Ingeniero",
    saludar: function() {
        console.log(`Hola, mi nombre es ${this.nombre}`);
    }
};

let personaSame2 = {
    nombre: "Juan",
    edad: 30,
    profesion: "Ingeniero",
    saludar: function() {
        console.log(`Hola, mi nombre es ${this.nombre}`);
    }
};

// Comparación de objetos por refrencia en memoria no por valor
console.log(personaSame == personaSame2); // false, porque son dos objetos diferentes en memoria
console.log(personaSame === personaSame2); // false, porque son dos objetos diferentes en memoria

//Iterar
for (let key in personaSame2) {
    console.log(`${key}: ${persona[key]}`);
}

//Funciones como bjects
function crearPersona(nombre, edad) {
    return {
        nombre: nombre,
        edad: edad,
        saludar: function() {
            console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
        }
    };
}