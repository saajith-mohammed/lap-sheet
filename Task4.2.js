const classroom = {
  className: "IT2025",
  teacher: "Mr. Perera",
  students: [
    { name: "Kavindu", age: 21 },
    { name: "Nimesha", age: 22 },
    { name: "Dinuka", age: 23 }
  ]
};

console.log("Teacher:", classroom.teacher);

classroom.students.push({ name: "Sajith", age: 20 });
console.log("New student added.");

console.log("Students:");
classroom.students.forEach((student) => {
  console.log(student.name);
});
