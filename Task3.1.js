// Create the object
const student = {
  name: "Kavindu",
  age: 21,
  faculty: "Computing",
  subjects: ["Web Development", "Database Systems", "Programming"]
};

// 1. Print the student's name and faculty
console.log("Name:", student.name);
console.log("Faculty:", student.faculty);

// 2. Add a new property called year
student.year = 2025;
console.log("Year added:", student.year);

// 3. Change the age to 22
student.age = 22;
console.log("Updated age:", student.age);

// 4. Print all subjects in a loop
console.log("Subjects:");
student.subjects.forEach((subject) => {
  console.log(subject);
});
