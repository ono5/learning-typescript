// 交差型
type Admin = {
  name: string;
  privileges: string[];
};
type Employee = {
  name: string;
  startDate: Date;
};
type ElevatedEmployee = Admin & Employee;
// interface Admin {
//   name: string;
//   privileges: string[];
// }
// interface Employee {
//   name: string;
//   startDate: Date;
// }
// interface ElevatedEmployee extends Admin, Employee {}

const e1: ElevatedEmployee = {
  name: "Max",
  privileges: ["create-server"],
  startDate: new Date(),
};

type Combinable = string | number;
type Numeric = number | boolean;
type Universal = Combinable & Numeric;

// function overload
function add2(a: number, b: number): number;
function add2(a: string, b: string): string;
function add2(a: number, b: string): string;
function add2(a: string, b: number): string;
function add2(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

// const result = add2(1, 5);
// const result = add2("Hello", "TypeScript") as string;
const result = add2("Hello", "TypeScript");
result.split(" ");

const fetchedUserData = {
  id: "u1",
  name: "user1",
  job: {
    title: "Developer",
    description: "TypeScript",
  },
};

// console.log(fetchedUserData.job && fetchedUserData.job.title);
// Optional Chain
console.log(fetchedUserData?.job?.title);

// type UnknownEmployee = Employee | Admin;
// function printEmployeeInformation(emp: UnknownEmployee) {
//   console.log(emp.name);
//   if ("privileges" in emp) {
//     console.log("Privileges: " + emp.privileges);
//   }
//   if ("startDate" in emp) {
//     console.log("StartDate: " + emp.startDate);
//   }
// }

// printEmployeeInformation({ name: "Manu", startDate: new Date() });

// class Car {
//   drive() {
//     console.log("Driving...");
//   }
// }

// class Truck {
//   drive() {
//     console.log("Track is driving...");
//   }

//   loadCargo(amount: number) {
//     console.log("There is any goods on Track...", amount);
//   }
// }

// type Vehicle = Car | Truck;

// const v1 = new Car();
// const v2 = new Truck();

// function useVehicle(vehicle: Vehicle) {
//   vehicle.drive();
//   if ("loadCargo" in vehicle) {
//     vehicle.loadCargo(100);
//   }
//   if (vehicle instanceof Truck) {
//     vehicle.loadCargo(1000);
//   }
// }

// useVehicle(v1);
// useVehicle(v2);

// interface Bird {
//   type: "bird";
//   flyingSpeed: number;
// }

// interface Horse {
//   type: "horse";
//   runningSpeed: number;
// }

// type Animal = Bird | Horse;

// function moveAnimal(animal: Animal) {
//   // if ("flyingSpeed" in animal) {
//   // console.log(animal.flyingSpeed);
//   // }
//   let speed;
//   switch (animal.type) {
//     case "bird":
//       speed = animal.flyingSpeed;
//       break;
//     case "horse":
//       speed = animal.runningSpeed;
//   }
//   console.log("移動速度: " + speed);
// }

// moveAnimal({ type: "bird", flyingSpeed: 10 });

// Pattern 1
// const userInputElement = <HTMLInputElement>(
//   document.getElementById("user-input")!
// );

// Pattern2
// const userInputElement = document.getElementById(
//   "user-input"
// ) as HTMLInputElement;

// pattern3
// const userInputElement = document.getElementById("user-input");
// if (userInputElement) {
//   (userInputElement as HTMLInputElement).value = "Hello";
// }

// interface ErrorContainer {
//   id: string;
//   [prop: string]: string;
// }

// const errorBag: ErrorContainer = {
//   id: "not right email",
// };
