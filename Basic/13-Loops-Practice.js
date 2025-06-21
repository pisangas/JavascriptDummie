// 1. Crea un bucle que imprima los números del 1 al 20
let number = 0;
for (number = 0; number < 21; number++ ){
    console.log(`Número: ${number}`);
}

number = 0;
while (number < 21) {
    console.log(`Número: ${number}`);
    number++;
}

// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado
let sum = 0;

do {
    sum += number;
    number++;
}while (number <= 100);
console.log(`Suma de los números del 1 al 100: ${sum}`);

// 3. Crea un bucle que imprima todos los números pares entre 1 y 50
for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
        console.log(`Número par: ${i}`);
    }
}

// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola

let namesArray = ["Ana", "Luis", "Pedro", "María", "Sofía"];
for (let name of namesArray) {
    console.log(`Nombre: ${name}`);
}

// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto
let text = "Hola, ¿como estas?";
let vowelsCount = 0;

for (let char of text) {
    if ("aeiou".includes(char)) {
        vowelsCount++;
    }    
}
console.log(`Vocales encontradas: ${vowelsCount}`);

// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto
let numbersArray = [1, 2, 3, 4, 5];
let product = 1;
for (let number of numbersArray) {
    product *= number;
}
console.log(`Producto de los números: ${product}`);

// 7. Escribe un bucle que imprima la tabla de multiplicar del 5
for(let i = 1; i <= 10; i++) {
    console.log(`5 x ${i} = ${5 * i}`);
}

// 8. Usa un bucle para invertir una cadena de texto
let str = "Hola Mundo";
let reversedStr = "";
for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
}
console.log(`Cadena invertida: ${reversedStr}`);

// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci
let fib = [0, 1];
for (let i = 2; i < 10; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
}
console.log(`Primeros 10 números de Fibonacci: ${fib.join(", ")}`);

// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10
let mixedNumbers = [5, 12, 8, 20, 3, 15, 7];
let greaterThanTen = [];
for (let number of mixedNumbers) {
    if (number > 10) {
        greaterThanTen.push(number);
    }
}
console.log(`Números mayores a 10: ${greaterThanTen.join(", ")}`);