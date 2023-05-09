function Logger(logString: string) {
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

function withTemplate(template: string, hookId: string) {
  return function (constructor: any) {
    const hookEl = document.getElementById(hookId);
    const p = new constructor();
    if (hookEl) {
      hookEl.innerHTML = template;
      hookEl.querySelector("h1")!.textContent = p.name;
    }
  };
}

// @Logger("Outputting Log - Person")
@withTemplate("<h1>Person Object</h1>", "app")
class Person {
  name = "Max";

  constructor() {
    console.log("Creating Person Object...");
  }
}

const pers = new Person();
console.log(pers);
