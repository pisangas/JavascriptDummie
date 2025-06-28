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

//encapsular
class PrivatePersona {
    #saldo; // Propiedad privada
    constructor(nombre, edad, profesion, saldo) {
        this.nombre = nombre;
        this.edad = edad;
        this.profesion = profesion;
        this.#saldo = saldo;
    }

    modificarSaldo(){
        this.#saldo += 1000; // Modifica el saldo
    }
    get saldo() {
        return console.log(`El saldo de ${this.nombre} es ${this.#saldo}`);
    }

    set saldo(nuevoSaldo) {
        this.#saldo = nuevoSaldo; // Modifica el saldo
    }

}


let privatePersona = new PrivatePersona("Ana", 25, "Diseñadora", 5000);

privatePersona.modificarSaldo(); // Modifica el saldo
privatePersona.saldo; // Muestra "El saldo de Ana es 6000"
privatePersona.saldo = 7000; // Modifica el saldo
privatePersona.saldo; // Muestra "El saldo de Ana es 7000"

//Herencia

class Animal{
    constructor(nombre){
        this.nombre = nombre;
    }
    hacerSonido() {
        console.log(`${this.nombre} hace un sonido.`);
    }
}

class Perro extends Animal {
    constructor(nombre, especie) {
        super(nombre); // Llama al constructor de la clase padre
        this.especie = especie;
    }
    corre() {
        console.log(`${this.nombre} corre.`);
    }

    hacerSonido() {
        console.log(`${this.nombre} ladra.`);
    }
}

let myDog = new Perro("Rex", "Labrador");
myDog.hacerSonido(); 
myDog.corre(); // Muestra "Rex corre."


//metodos estaticos
class MathOperations {
    static suma(a, b) {
        return a + b;
    }

    static resta(a, b) {
        return a - b;
    }
}

console.log(MathOperations.suma(5, 3)); // Muestra 8
console.log(MathOperations.resta(5, 3)); // Muestra 2

