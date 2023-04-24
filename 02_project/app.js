// not best practice
// const person: {
//   name: string;
//   age: number;
// } = {
//   name: "ono5",
//   age: 34,
// };
// best practice
var person = {
    name: "ono5",
    age: 34,
    hobbies: ["Sports", "Cooking"],
    role: [2, "author"],
};
person.role.push("admin");
var favoriteActivities;
favoriteActivities = ["Sports"];
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
