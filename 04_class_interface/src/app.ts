// interfaceはオブジェクトがどんな形であるか定義するためのもの
interface Greetable {
  name: string;

  greet(phrase: string): void;
}

class Person implements Greetable {
  name: string;
  age = 30;

  constructor(n: string) {
    this.name = n;
  }

  greet(phrase: string) {
    console.log(phrase + " " + this.name);
  }
}

// type Person = {
//   name: string;
//   age: number;

//   greet(phrase: string): void;
// };

let user1: Greetable;
// user1 = {
//   name: "Max",
//   age: 30,
//   greet(phrase: string) {
//     console.log(phrase);
//   },
// };

// user1.greet("Hello I am");

user1 = new Person("Max");
user1.greet("Hello I am");
console.log(user1);
