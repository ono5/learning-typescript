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
