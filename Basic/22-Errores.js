//excepcion
// let MyObject
// console.log(MyObject.mail); // Muestra "undefined" porque MyObject no está definido

//try-catch
try {
    console.log(MyObject.mail); // Muestra "undefined" porque MyObject no está definido
    console.log("Este mensaje no se mostrará si ocurre un error antes.");
} catch (error) {
    console.error("Ha ocurrido un error:", error.message);
}

//finally
try {
    console.log(MyObject.mail); // Muestra "undefined" porque MyObject no está definido
    console.log("Este mensaje no se mostrará si ocurre un error antes.");
} catch (error) {
    console.error("Ha ocurrido un error:", error.message);
}finally {
    console.log("Este bloque se ejecuta siempre, independientemente de si ocurre un error o no.");
}

//throw
function validarEdad(edad) {
    if (edad < 0) {
        throw new Error("La edad no puede ser negativa.");
    }
    return `La edad es ${edad}.`;
}

try {
    console.log(validarEdad(-5)); // Esto lanzará un error
} catch (error) {
    console.error("Error capturado:", error.message);
}
