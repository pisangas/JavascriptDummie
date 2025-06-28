// 1. Usa desestructuración para extraer los dos primeros elementos de un array 
let myArray = [1, 2];
let [a, b] = myArray;
console.log(a); // Muestra 1    
console.log(b); // Muestra 2

// 2. Usa desestructuración en un array y asigna un valor predeterminado a una variable
let [c = 0, d = 0, e = 0] = myArray;
console.log(c); // Muestra 1    
console.log(d); // Muestra 2
console.log(e); // Muestra 0 (valor predeterminado)

// 3. Usa desestructuración para extraer dos propiedades de un objeto
let vehiculo = {
    marca : "Mazda",
    modelo : 2020,
    color : "Rojo",
    features :{
        asientos : "Cuero",
        puertas : 4
    },
    arrancar: function() {
        console.log(`El ${this.marca} ${this.modelo} está arrancando.`);
    }
}
let { marca, modelo } = vehiculo;
console.log(marca); // Muestra "Mazda"
console.log(modelo); // Muestra 2020


// 4. Usa desestructuración para extraer dos propiedades de un objeto y asígnalas a nuevas variables con nombres diferentes
let { marca: myMarca = "Desconocida", modelo: myModelo = 0 } = vehiculo;
console.log(myMarca); // Muestra "Mazda"
console.log(myModelo); // Muestra 2020

// 5. Usa desestructuración para extraer dos propiedades de un objeto anidado
let { features : {asientos : miAsiento = 0, puertas : miPuerta = 0} } = vehiculo;
console.log(miAsiento); // Muestra "Cuero"
console.log(miPuerta); // Muestra 4

// 6. Usa propagación para combinar dos arrays en uno nuevo
let fArray1 = [1, 2, 3];
let fArray2 = [4, 5, 6];

let nArray = [...fArray1, ...fArray2];
console.log(nArray); // Muestra [1, 2, 3, 4, 5, 6]

// 7. Usa propagación para crear una copia de un array
let originalArray = [1, 2, 3, 4, 5];
let copiedArray = [...originalArray];
console.log(copiedArray); // Muestra [1, 2, 3, 4, 5]


// 8. Usa propagación para combinar dos objetos en uno nuevo
let obj1 = { a: 1, b: 2 };
let obj2 = { c: 3, d: 4 };
let combinedObject = { ...obj1, ...obj2 };
console.log(combinedObject); // Muestra { a: 1, b: 2, c: 3, d: 4 }

// 9. Usa propagación para crear una copia de un objeto
let nObject = {...obj1 };
console.log(nObject); // Muestra { a: 1, b: 2 }

