// 1. Crea un objeto con 3 propiedades

let MyCar = {
    brand: "Toyota",
    model: "Corolla",
    year: 2020
};

// 2. Accede y muestra su valor
console.log(MyCar.brand); // Muestra "Toyota"
console.log(MyCar.model); // Muestra "Corolla"
console.log(MyCar.year); // Muestra 2020

// 3. Agrega una nueva propiedad
MyCar.color = "Red"
console.log(MyCar.color); // Muestra "Red"

// 4. Elimina una de las 3 primeras propiedades
delete MyCar.year;
console.log(MyCar.year); // Muestra undefined

// 5. Agrega una función e invócala
MyCar.getDetails = function() {
    return `${this.brand} ${this.model}`;
};

// 6. Itera las propiedades del objeto
for (let key in MyCar) {
    console.log(`${key}: ${MyCar[key]}`);
}

// 7. Crea un objeto anidado
let Owner = {
    name: "John Doe",
    age: 30,
    address: {
        street: "123 Main St",
        city: "Anytown",
        country: "USA"
    }
};

// 8. Accede y muestra el valor de las propiedades anidadas
console.log(Owner.address.street); // Muestra "123 Main St"
console.log(Owner.address.city); // Muestra "Anytown"

// 9. Comprueba si los dos objetos creados son iguales
function areObjectsEqual(obj1, obj2) {
    return JSON.stringify(obj1) === JSON.stringify(obj2);
}

// 10. Comprueba si dos propiedades diferentes son iguales
function arePropertiesEqual(obj1, prop1, obj2, prop2) {
    return obj1[prop1] === obj2[prop2];
}