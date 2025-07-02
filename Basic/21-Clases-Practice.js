// 1. Crea una clase que reciba dos propiedades
class Mascota{
    constructor(nombre, raza, edad){
        this.nombre = nombre;
        this.raza = raza;
        this.edad = edad;
    }
    // 2. Añade un método a la clase que utilice las propiedades
    hablar() {
        console.log(`Hola, soy ${this.nombre}, una mascota de raza ${this.raza} y tengo ${this.edad} años.`);
    }
}

// 3. Muestra los valores de las propiedades e invoca a la función
let miMascota = new Mascota("Firulais", "Labrador", 5);
console.log(miMascota.nombre); // Muestra "Firulais"
console.log(miMascota.raza); // Muestra "Labrador"
console.log(miMascota.edad); // Muestra 5
miMascota.hablar(); // Muestra "Hola, soy Firulais, una mascota de raza Labrador y tengo 5 años."

// 4. Añade un método estático a la primera clase
class Mascota {
    constructor(nombre, raza, edad) {
        this.nombre = nombre;
        this.raza = raza;
        this.edad = edad;
    }

    hablar() {
        console.log(`Hola, soy ${this.nombre}, una mascota de raza ${this.raza} y tengo ${this.edad} años.`);
    }

    // 4. Método estático
    static info() {
        console.log("Las mascotas son seres vivos que requieren cuidado y amor.");
    }
}

// 5. Haz uso del método estático

Mascota.info(); // Muestra "Las mascotas son seres vivos que requieren cuidado y amor."
// 6. Crea una clase que haga uso de herencia
let MascotaConDueño = class extends Mascota {
    constructor(nombre, raza, edad, dueño) {    
        super(nombre, raza, edad); // Llama al constructor de la clase padre
        this.dueño = dueño;
    }
    
// 7. Crea una clase que haga uso de getters y setters
    get info() {
        return `${this.nombre} es un ${this.raza} de ${this.edad} años y su dueño es ${this.dueño}.`;
    }

    set nuevoDueño(nuevoDueño) {
        this.dueño = nuevoDueño; // Modifica el dueño
    }
}

// 8. Modifica la clase con getters y setters para que use propiedades privadas
class PrivateMascota {
    #nombre;
    #raza;
    #edad;
    #dueño;

    constructor(nombre, raza, edad, dueño) {
        this.#nombre = nombre;
        this.#raza = raza;
        this.#edad = edad;
        this.#dueño = dueño;
    }

    // Método para hablar
    hablar() {
        console.log(`Hola, soy ${this.#nombre}, una mascota de raza ${this.#raza} y tengo ${this.#edad} años.`);
    }

    // Getter para obtener la información
    get info() {
        return `${this.#nombre} es un ${this.#raza} de ${this.#edad} años y su dueño es ${this.#dueño}.`;
    }

    // Setter para modificar el dueño
    set nuevoDueño(nuevoDueño) {
        this.#dueño = nuevoDueño; // Modifica el dueño
    }
}

// 9. Utiliza los get y set y muestra sus valores
let miMascotaPrivada = new PrivateMascota("Rex", "Pastor Alemán", 4, "Carlos");
miMascotaPrivada.hablar(); // Muestra "Hola, soy Rex, una mascota de raza Pastor Alemán y tengo 4 años."
console.log(miMascotaPrivada.info); // Muestra "Rex es un Pastor Alem

// 10. Sobrescribe un método de una clase que utilice herencia 
miMascotaPrivada.nuevoDueño = "Ana"; // Modifica el dueño
console.log(miMascotaPrivada.info); // Muestra "Rex es un Pastor Alemán de 4 años y su dueño es Ana."