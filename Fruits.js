// Create the array
const fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];
console.log("Initial array:", fruits);

// Print the first and last item
console.log("First fruit:", fruits[0]);
console.log("Last fruit:", fruits[fruits.length - 1]);

//Add a new fruit at the end
fruits.push("Pineapple");
console.log("After adding a new fruit:", fruits);

//Remove the second fruit (index 1)
fruits.splice(1, 1);
console.log("After removing second fruit:", fruits);

//Find the length of the array
console.log("Length of the array:", fruits.length);
