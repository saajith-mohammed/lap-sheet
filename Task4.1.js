const students = [
  { name: "Kavindu", age: 21, faculty: "Computing" },
  { name: "Nimesha", age: 22, faculty: "Engineering" },
  { name: "Dinuka", age: 23, faculty: "Business" }
];

console.log("Student Names:");
students.forEach((student) => {
  console.log(student.name);
});

const olderStudents = students.filter((student) => student.age > 21);
console.log("Students older than 21:", olderStudents);

const facultyNames = students.map((student) => student.faculty);
console.log("All faculty names:", facultyNames);
