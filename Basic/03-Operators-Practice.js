// 1. Crea una variable para cada operación aritmética
let Addition = 10 + 10;
let Subtract = 20 - 12;
let Multiply = 5 * 4;
let Division = 100 / 5;
let Modulus = 10 % 3;
let Exponentiation = 2 ** 3;
let Increment = 10;
let Decrement = 20;

// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas


// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación
console.log("Comparaciones Verdaderas:");
console.log("Igual(valor):", Addition == Multiply); // Igual
console.log("Igual:(valor, tipo)", Addition === Multiply); // Igual
console.log("Mayor que:", Division > Subtract); // Mayor
console.log("Menor que:", Modulus < Exponentiation); // Menor
console.log("Mayor o igual que:", Increment >= 10); // Mayor o igual

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación
console.log("Comparaciones Falsas:");
console.log("No igual(valor):", Addition != Multiply); // No igual
console.log("No igual:(valor, tipo)", Addition !== Multiply); // No igual
console.log("Menor que:", Division < Subtract); // Menor
console.log("Mayor que:", Modulus > Exponentiation); // Mayor
console.log("Menor o igual que:", Increment <= 5); // Menor o igual

// 5. Utiliza el operador lógico and
console.log("Operador lógico AND:");
console.log("Resultado AND:", (Addition > 10 && Subtract < 15)); // AND

// 6. Utiliza el operador lógico or
console.log("Operador lógico OR:");
console.log("Resultado OR:", (Multiply > 10 || Division < 20)); // OR

// 7. Combina ambos operadores lógicos
console.log("Combinación de operadores lógicos:");
console.log("Resultado combinado:", (Addition > 10 && Subtract < 15) || (Multiply > 10 || Division < 20)); // Combinación AND y OR

// 8. Añade alguna negación
console.log("Operador lógico NOT:");
console.log("Resultado NOT:", !(Addition < 10)); // NOT

// 9. Utiliza el operador ternario
Addition > 10 ? console.log("Addition es mayor que 10") : console.log("Addition no es mayor que 10");
