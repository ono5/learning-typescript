function Logger(constructor: Function) {
  console.log("Outputting Log...");
  console.log(constructor);
}

@Logger
class Person {
  name = "Max";

  constructor() {
    console.log("Creating Person Object...");
  }
}

const pers = new Person();
console.log(pers);
