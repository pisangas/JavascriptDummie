//Exportacion de modulos

export function greet(name) {
    return `Hello, ${name}!`;
}

// Propiedades de exportacion
export const  fileSource = ' file desde 26-ExportModules.js'; // Example of a named export
export const  propertySource = ' property desde 26-ExportModules.js'; // Example of a named export

//Export by default
//solo sepuede exportar una funcion por defecto
export default function defaultGreet(name) {
    return `Default greeting for ${name}`;
}