//declare: formado por un par de elementos, parecido al Dictionary de C# Key, value
let map = new Map();

//metodos comunes
map.set("name", "Eduardo"); // Adds a key-value pair to the Map
map.set("age", 30); // Adds another key-value pair to the Map
map.set("city", "Medellin"); // Adds another key-value pair to the Map
map.set("mail", "pisangas@gmail.com"); // Adds another key-value pair to the Map");
map.set("isJuvenile", false); // Adds another key-value pair to the Map
console.log(map); // Outputs the Map with the added key-value pairs

// Accessing values by key
console.log(map.get("name")); // Outputs the value associated with the key "name"
console.log(map.get("mail")); // Outputs the value associated with the key "name"

// Checking if a key exists in the Map
console.log(map.has("age")); // Outputs true if the key "age" exists in the Map, false otherwise
console.log(map.has("country")); // Outputs false if the key "country" does not exist in the Map


// Getting the size of the Map
console.log(map.size); // Outputs the number of key-value pairs in the Map

// Deleting a key-value pair from the Map
map.delete("city")
console.log(map); // Deletes the key-value pair with the key "city" from the Map

// Converting the Map to an array of key-value pairs
let mapArray = Array.from(map); // Converts the Map to an array of key-value pairs
console.log(mapArray); // Outputs the array created from the Map

// Converting the Map to an object
let mapObject = Object.fromEntries(map); // Converts the Map to an object
console.log(mapObject); // Outputs the object created from the Map

// Converting an object to a Map
let objectToMap = new Map(Object.entries(mapObject)); // Converts the object back to a Map
console.log(objectToMap); // Outputs the Map created from the object

// Iterating over the Map
for (let [key, value] of map) {
    console.log(`Key: ${key}, Value: ${value}`); // Outputs each key-value pair in the Map
}



