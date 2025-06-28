// Crear una clase
class Persona {
    constructor(nombre, edad, profesion) {
        this.nombre = nombre;
        this.edad = edad;
        this.profesion = profesion;
    }

    saludar() {
        console.log(`Hola, mi nombre es ${this.nombre}`);
    }
}

// Crear una instancia de la clase
let juan = new Persona("Juan", 30, "Ingeniero");
// Llamar al método saludar
juan.saludar(); // Muestra "Hola, mi nombre es Juan"
console.log(juan.edad); // Muestra 30
console.log(juan.profesion); // Muestra "Ingeniero"

//valores por defecto
class Estudiante {
    constructor(nombre = "N", apellido = "N", edad = 0, curso = "Desconocido") {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.curso = curso;
    }
}

let estudiante1 = new Estudiante();
console.log(estudiante1.nombre); // Muestra "N"
console.log(estudiante1.apellido); 

estudiante1.apellido = "Pérez";
console.log(estudiante1.apellido); // Muestra "Pérez"

