// interfaceはオブジェクトがどんな形であるか定義するためのもの
// type AddFn = (a: number, b: number) => number;
interface AddFn {
  (a: number, b: number): number;
}
let add: AddFn;
add = (n1: number, n2: number) => {
  return n1 + n2;
};

interface Named {
  readonly name?: string;
  outputName?: string;
}

interface Greetable extends Named {
  greet(phrase: string): void;
}

class Person implements Greetable {
  name?: string;
  age = 30;

  constructor(n?: string) {
    if (n) {
      this.name = n;
    }
    this.name = n;
  }

  greet(phrase: string) {
    if (this.name) {
      console.log(phrase);
    }
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
