console.log("hello world from a console.log statement");

//Error
console.error("This is an error message");
console.error("Error en el objecto: ", new Error("This is an error object"));

//Warning
console.warn("This is a warning message");

//Info
console.info("This is an info message");

//table
let data = [
    {name: "John", age: 30}
]

console.table(data);

data = [
    {name: "John", age: 30},
    {name: "Ana", age: 31},
    {name: "Pedro", age: 32}
] 
    
console.table(data);

//grupo
console.group("User Details");
console.log("Name: John");
console.log("Age: 30");
console.groupEnd("User Details");

//time
console.time("Array Initialization");
for(let i = 0; i < 100000; i++){
    
}
console.timeEnd("Array Initialization");

//Assert
console.assert(1 === 1, "This assertion will not throw an error");
console.assert(1 === 2, "This assertion will throw an error");

//count
console.count("Counter");
console.count("Counter");
console.count("Counter");
console.count("Counter");
console.countReset("Counter");
console.count("Counter");
console.count("Counter");

//trace

function anotherFunction() {
    exampleFunction(); 
}

function exampleFunction() {
    console.trace("Trace Example");
}

anotherFunction();

//clear
console.clear();

