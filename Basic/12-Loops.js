//loops o bucles

// for loop: tal cual como en C#
for(let i=0; i < 5; i++) {
    //Extrapolar el console.log(i);
    console.log("Hola mundo " + i);
    console.log(`Hola ${i}`)
}

const letters = ['E', 'd', 'u', 'a', 'r'];
// for loop con un array
for(let i=0; i < letters.length; i++) {
    console.log(`Hola ${letters[i]}`);
}

//while loop: se ejecuta mientras la condicion sea verdadera

let wh = 0;
while (wh <= 5) {
    console.log("Hola valor while: " + wh);
    wh++;
    
}

//do while loop: se ejecuta al menos una vez y luego verifica la condicion
let dw = 0;
do {
    console.log("Hola valor do while: " + dw);
    dw++;
}while (dw < 5);


let myArray = [1, 2, 3, 4, 5];
let mySet = new Set(["Eduardo", "Medellin", "1", false]); // Creates a new Set with the provided values);
//for of loop: se usa para iterar sobre arrays, strings, etc.
for (const letter of myArray) {
    console.log(`Hola for of: ${letter}`);
}

for (const letter of letters) {
    console.log(`Hola for of: ${letter}`);
}

for (const letter of mySet) {
    console.log(`Hola for of: ${letter}`);
}

//break and continue: se usan para controlar el flujo del bucle
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        console.log("Break at 5");
        break; // Breaks the loop when i is 5
    }
    console.log(`Hola break: ${i}`);
}

for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
        console.log("Continue at even number: " + i);
        continue; // Skips the rest of the loop when i is even
    }
    console.log(`Hola continue: ${i}`);
}