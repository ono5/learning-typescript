// const names: Array<string> = [];
// names[0].length;

// const promise: Promise<number> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(10);
//   }, 2000);
// });

// promise.then((data) => {
//   console.log("test");
// });

function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergeObj = merge({ name: "Max" }, { age: 30 });
// const mergeObj2 = merge({ name: "Max", hobbies: ["Sports"] }, 30);
const mergeObj2 = merge({ name: "Max", hobbies: ["Sports"] }, { age: 30 });
// const mergeObj3 = merge<{ name: string }, { age: number }>(
//   { name: "Max" },
//   { age: 30 }
// );
console.log(mergeObj2);

interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = "There is no value.";
  if (element.length > 0) {
    descriptionText = "The number of value is " + element.length + ".";
  }
  return [element, descriptionText];
}

console.log(countAndDescribe("Thank you for your hard work"));
console.log(countAndDescribe(["Sports", "Cooking"]));
// console.log(countAndDescribe(10)); Error occurs!

function ExtractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return "Value: " + obj[key];
}

ExtractAndConvert({ name: "Max" }, "name");
