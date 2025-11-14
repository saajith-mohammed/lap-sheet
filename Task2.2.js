const numbers = [2, 5, 8, 10, 12];

const hasEight = numbers.includes(8);
console.log("Does the array include 8?", hasEight);

const indexOfTen = numbers.indexOf(10);
console.log("Index of 10:", indexOfTen);

const sortedNumbers = numbers.slice().sort((a, b) => a - b);
console.log("Sorted array:", sortedNumbers);
