let myArray = [];
let myArray2 = new Array();

myArray = [1, 2, 3, 4, 5];
myArray2 = new Array(3);

myArray2[0] = 10;
myArray2[1] = 20;
myArray2[2] = "Example";
myArray2[3] = "This will not be added";
myArray2[4] = "This will not be added either"; // This will not be added, as the array was initialized with a length of 3
myArray2[5] = "This will not be added either"; // This will not be added, as the array was initialized with a length of 3
myArray2[6] = "This will not be added either"; // This will not be added, as the array was initialized with a length of 3

console.log(myArray); 
console.log(myArray2); 

//metodos comunees
myArray = []
myArray.push(1); // Adds 1 to the end of the array
myArray.push(2); // Adds 2 to the end of the array
myArray.push("Eduardo");
console.log(myArray); 
myArray.pop(); // Removes the last element (Eduardo)
console.log(myArray); 

myArray.shift(); // Removes the first element (1)
console.log(myArray);

myArray.unshift("Eduardo", "Medellin") // Adds "Eduardo" and "Medellin" to the beginning of the array
console.log(myArray);

console.log(myArray.length); // Outputs the length of the array (2 in this case)

let myNewArray = myArray.slice(0, 1); // Creates a new array with the first element of myArray

console.log(myNewArray); // Outputs the new array containing the first element

myArray.splice(0, 1); // Removes the first element from myArray
console.log(myArray); // Outputs the original array