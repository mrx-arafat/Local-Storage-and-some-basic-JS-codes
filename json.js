const students = {
  name: "arafat",
  id: 78,
  movie: ["king", "queen"],
};
const stg = JSON.stringify(students);
console.log(stg);

const keys = Object.keys(students);
const values = Object.values(students);

console.log(values);
