// not best practice
// const person: {
//   name: string;
//   age: number;
// } = {
//   name: "ono5",
//   age: 34,
// };

// best practice
const person = {
  name: "ono5",
  age: 34,
  hobbies: ["Sports", "Cooking"],
  role: [2, "author"],
};

person.role.push("admin");

let favoriteActivities: string[];
favoriteActivities = ["Sports"];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}
