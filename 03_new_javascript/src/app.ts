const userName = "Max";
// userName = "test";

// let age = 30;
// age = 29;

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
  firstName: "Max",
  age: 30,
};

const copiedPerson = {
  ...person,
};

const addNeo = (...numbers: number[]) => {
  return numbers.reduce((curResult, curValue) => {
    return curResult + curValue;
  }, 0);
};

// more strict
const addNeo2 = (...numbers: [number, number, number]) => {
  return numbers.reduce((curResult, curValue) => {
    return curResult + curValue;
  }, 0);
};

const addedNumbers = addNeo(1, 2, 3, 4);
console.log(addedNumbers);

// const hobby1 = hobbies[0];
// const hobby2 = hobbies[1];
const [hobby1, hobby2, ...remainingHobbies] = hobbies;
const { firstName, age } = person;
