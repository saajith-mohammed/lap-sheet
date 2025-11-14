const numbers = [2, 5, 8, 10, 12];


const doubled = numbers.map((num) => num * 2);
console.log("Doubled:", doubled);


const greaterThanSix = numbers.filter((num) => num > 6);
console.log("Greater than 6:", greaterThanSix);

const sum = numbers.reduce((total, num) => total + num, 0);
console.log("Sum:", sum);
