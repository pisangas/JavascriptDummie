let mySet = new Set(["Eduardo", "Medellin", "1", false]); // Creates a new Set with the provided values);

console.log(mySet); // Outputs the Set

//metodos comunes
mySet.add("pisangas"); // Adds "Eduardo" to the Set (will not duplicate)
console.log(mySet); // Outputs the Set

//mySet.delete("Medellin"); // Deletes "Medellin" from the Set
console.log(mySet.delete("Medellin")); // Outputs the Set
console.log(mySet); // Outputs the Set after deletion
//NOTA: Los set's no tienen un orden definido, por lo que no se puede acceder a un elemento por su índice

//has
console.log(mySet.has("Eduardo")); // Outputs true if "Eduardo" is in the Set, false otherwise


//Size
console.log(mySet.size); // Outputs the number of elements in the Set

//Covert to array
let myArrayFromSet = Array.from(mySet); // Converts the Set to an array
console.log(myArrayFromSet); // Outputs the array created from the Set
console.log(myArrayFromSet[0]); // Outputs the first element of the array created from the Set

//Convert to Set
let mySetFromArray = new Set(myArrayFromSet); // Converts the array back to a Set
console.log(mySetFromArray); // Outputs the Set created from the array


//pricipal caracteristica de los set es o admitir duplicados - motivo por el cual tamñoco tenemos indexes - case sensitive
mySet.add("Eduardo"); // Adds "Eduardo" to the Set (will not duplicate)
console.log(mySet); // Outputs the Set after adding "Eduardo" again (no change since it's a duplicate)