// //Functions
function getPerson(name, middleName, lastName) {
    return `Hola, ${name} ${middleName} ${lastName} !`;
}

console.log(getPerson("Eduardo", "Gil", "Rivas"));

//anonimas
const getPerson2 = function(name, middleName, lastName) {
    return `Hola, ${name} ${middleName} ${lastName} !`;
}

console.log(getPerson2("Eduardo", "Gil", "Rivas"));

//Arrow functions
const getPerson3 = (name, middleName, lastName) => {
    return `Hola, ${name} ${middleName} ${lastName} !`;
}

console.log(getPerson3("Eduardo", "Gil", "Rivas"));

//parameters
function sum(a, b) {
    return a + b;
}
console.log(sum(5, 10));

//default parameters
function sum2(a = 0, b = 0) {
    return a + b;
}
console.log(sum2(5));

