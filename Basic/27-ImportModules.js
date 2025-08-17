//Importacion modulos

// funciones
import defaultGreet, { greet, propertySource, fileSource } from './26-ExportModules.js';

greet('Egil'); // Invokes the greet function from the imported module
console.log(greet('Egil') + propertySource); 
console.log(greet('Egil') + fileSource); 

// Display the imported property values
console.log(defaultGreet('Egil')); // Invokes the default exported function
