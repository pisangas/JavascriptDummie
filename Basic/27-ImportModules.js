//Importacion modulos

// funciones
import defaultGreet, { greet, propertySource, fileSource, Circle } from './26-ExportModules.js';

greet('Egil'); // Invokes the greet function from the imported module
console.log(greet('Egil') + propertySource); 
console.log(greet('Egil') + fileSource); 

// Display the imported property values
console.log(defaultGreet('Egil')); // Invokes the default exported function

let circle = new Circle(5); // Create an instance of the Circle class
console.log(`Area of the circle: ${circle.area().toFixed(4)}`); // Display the area of the circle
console.log(`Perimeter of the circle: ${circle.perimeter().toFixed(4)}`); // Display the perimeter of the circle