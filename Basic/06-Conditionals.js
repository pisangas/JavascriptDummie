let age = 18;

if(age > 17) {
    console.log("You are an adult.");
}else {
    console.log("You are a minor.");
}

// Ternary operator
const message = age >= 18 ? "You are an adult." : "You are a minor.";
console.log(message);

// Switch statement
let day = 4;
switch(day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
}