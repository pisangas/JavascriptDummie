// 1. Captura una excepción utilizando try-catch

try{
    // Código que puede lanzar una excepción
    let result = someUndefinedFunction(); // Esto lanzará un error porque la función no está definida

}catch(error){
    console.error("Se ha producido un error:", error);

// 2. Captura una excepción utilizando try-catch y finally

} finally {
    console.log("Este bloque se ejecuta siempre, independientemente de si ocurre un error o no.");
}

// 3. Lanza una excepción genérica

try{
    // Código que puede lanzar una excepción
    let result = someUndefinedFunction(); // Esto lanzará un error porque la función no está definida

}catch
{
    throw new Error("Error genérico lanzado desde el bloque catch.");
}

// 6. Lanza varias excepciones según una lógica definida
try {
    let value = -1; // Valor que causa un error
} catch (error) {
    if (value < 0) {
        throw new Error("El valor no puede ser negativo.");
    } else if (value === 0) {
        throw new Error("El valor no puede ser cero.");
    } else {
        console.log("El valor es válido.");
    }
}

// 8. Crea un bucle que intente transformar a float cada valor y capture y muestre los errores


// 9. Crea una función que verifique si un objeto tiene una propiedad específica y lance una excepción personalizada

// 10. Crea una función que realice reintentos en caso de error hasta un máximo de 10