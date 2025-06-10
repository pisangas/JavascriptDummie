// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor
let condition = true;
let name = "John Doe";
if (condition) {
    console.log(name);
}

// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos
let userName = "user"
let password = "123";

if (userName === "user" && password === "123") {
    console.log("Login successful");
}else {
    console.log("Login failed");
}

// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje
let number = 5;
if (number > 0) {
    console.log("The number is positive.");
}else if (number < 0) {
    console.log("The number is negative.");
}else if (number === 0) {
    console.log("The number is zero.");
}

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan
let age = 16;
age > 17 ? console.log("You can vote.") : console.log(`You need ${18 - age} more years to vote.`);


// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
let canVote = age > 17 ? "adulto" : "menor";
console.log(`You are an ${canVote}.`);

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"
let month = 3; // March
switch (month) {
    case 1: // January
    case 2: // February
        console.log("It's winter.");
        break;
    case 3: // March
    case 4: // April
    case 5: // May
        console.log("It's spring.");
        break;
    case 6: // June
    case 7: // July
    case 8: // August
        console.log("It's summer.");
        break;
    case 9: // September
    case 10: // October
    case 11: // November
        console.log("It's autumn.");
        break;
    default:
        console.log("Invalid month.");
}


// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior
let daysInMonth;
switch (month) {
    case 1: // January
    case 3: // March
    case 5: // May
    case 7: // July
    case 8: // August
    case 10: // October
    case 12: // December
        daysInMonth = 31;
        break;
    case 4: // April
    case 6: // June
    case 9: // September
    case 11: // November
        daysInMonth = 30;
        break;
    case 2: // February
        daysInMonth = 28; // Not considering leap years for simplicity
        break;
    default:
        daysInMonth = "Invalid month";
}

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma
let language = "es"; // Spanish
switch (language) {
    case "en":
        console.log("Hello!");
        break;
    case "es":
        console.log("¡Hola!");
        break;
    case "fr":
        console.log("Bonjour!");
        break;
    case "de":
        console.log("Hallo!");
        break;
    default:
        console.log("Language not supported.");
}

// 9. Usa un switch para imprimir un mensaje dependiendo del día de la semana
let dayOfWeek = 3; // Wednesday
switch (dayOfWeek) {
    case 1: // Monday
        console.log("It's Monday, start of the week!");
        break;
    case 2: // Tuesday
        console.log("It's Tuesday, keep going!");
        break;
    case 3: // Wednesday
        console.log("It's Wednesday, we're halfway through!");
        break;
    case 4: // Thursday
        console.log("It's Thursday, almost there!");
        break;
    case 5: // Friday
        console.log("It's Friday, the weekend is near!");
        break;
    case 6: // Saturday
        console.log("It's Saturday, enjoy your day!");
        break;
    case 7: // Sunday
        console.log("It's Sunday, rest and recharge!");
        break;
    default:
        console.log("Invalid day of the week.");
}