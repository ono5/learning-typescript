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

class DataStorage<T extends string | number | boolean> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    // if (this.data.indexOf(item) === -1) {
    //   return;
    // }
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
// textStorage.addItem(10);
textStorage.addItem("Data1");
textStorage.addItem("Data2");
textStorage.removeItem("Data2");
textStorage.getItems();

const numberStorage = new DataStorage<number>();

// const objStorage = new DataStorage<object>();
// const obj = { name: "Max" };
// objStorage.addItem({ name: "Manu" });
// objStorage.removeItem({ name: "Manu" });
// console.log(objStorage.getItems());

interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

// function createCourseGoal(
//   title: string,
//   description: string,
//   date: Date
// ): CourseGoal {
//   return {
//     title: title,
//     description: description,
//     completeUntil: date,
//   };
// }
function createCourseGoal(
  title: string,
  description: string,
  date: Date
): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = date;
  return courseGoal as CourseGoal;
}

// Readonly value
const names: Readonly<string[]> = ["Max", "Anna"];
// names.push("Manu");
// names.pop();
// https://www.typescriptlang.org/docs/handbook/utility-types.html
