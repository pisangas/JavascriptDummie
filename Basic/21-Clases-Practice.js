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

// 5. Haz uso del método estático

// 6. Crea una clase que haga uso de herencia

// 7. Crea una clase que haga uso de getters y setters

// 8. Modifica la clase con getters y setters para que use propiedades privadas

// 9. Utiliza los get y set y muestra sus valores

// 10. Sobrescribe un método de una clase que utilice herencia 