function Logger(logString: string) {
  console.log("LOGGER Factory");
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

function withTemplate(template: string, hookId: string) {
  console.log("TEMPLATE Factory");
  return function (constructor: any) {
    const hookEl = document.getElementById(hookId);
    console.log("Show template!");
    const p = new constructor();
    if (hookEl) {
      hookEl.innerHTML = template;
      hookEl.querySelector("h1")!.textContent = p.name;
    }
  };
}

@Logger("Outputting Log - Person")
@withTemplate("<h1>Person Object</h1>", "app")
class Person {
  name = "Max";

  constructor() {
    console.log("Creating Person Object...");
  }
}

const pers = new Person();

console.log(pers);

// ・・・

function Log(target: any, propertyName: string | Symbol) {
  console.log("Property Decorator");
  console.log(target.propertyName);
}

class Product {
  @Log
  title: string;
  private _price: number;

  set price(val: number) {
    if (val > 0) {
      this._price = val;
    } else {
      throw new Error("Unvariable Value - Cannot set up values under 0.");
    }
  }

  constructor(t: string, p: number) {
    this.title = t;
    this._price = p;
  }

  getPriceWithTax(tax: number) {
    return this._price + (1 + tax);
  }
}
