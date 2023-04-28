const userName = "Max";
// userName = "test";

let age = 30;
age = 29;

// function add(a: number, b: number) {
//   // var result;
//   let result;
//   result = a + b;
//   return result;
// }

// const add = (a: number, b: number) => {
//   return a + b;
// };

const add = (a: number, b: number = 1) => a + b;

const printOutput: (output: string | number) => void = (output) => {
  console.log(output);
};

printOutput(add(5));

const button = document.querySelector("button");

if (button) {
  button.addEventListener("click", (event) => {
    console.log(event);
  });
}

const hobbies = ["Sports", "Cooking"];
const activeHobbies = ["Hiking"];

// activeHobbies.push(hobbies[0], hobbies[1]);
activeHobbies.push(...hobbies);

const person = {
  name: "Max",
  age: 30,
};

const copiedPerson = {
  ...person,
};
