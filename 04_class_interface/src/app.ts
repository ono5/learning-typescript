abstract class Department {
  // name: string;
  // private readonly id: string
  protected employees: string[] = [];
  static fiscalYear = 2023;

  static createEmployee(name: string) {
    return { name: name };
  }

  constructor(protected readonly id: string, public name: string) {
    // this.id = id
    // this.name = n;
    console.log(Department.fiscalYear);
  }

  abstract describe(this: Department): void;

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  constructor(id: string, private admins: string[]) {
    super(id, "IT");
    this.admins = admins;
  }
  describe() {
    console.log("IT Department - ID " + this.id);
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("Not find a report...");
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("Please set the right value!");
    }
    this.addReport(value);
  }

  constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    this.lastReport = reports[0];
  }

  describe() {
    console.log("Account Department - ID: " + this.id);
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  printReports() {
    console.log(this.reports);
  }

  addEmployee(name: string) {
    if (name == "Max") {
      return;
    }
    this.employees.push(name);
  }
}

const employee1 = Department.createEmployee("Max");
console.log(employee1, Department.fiscalYear);

const it = new ITDepartment("d1", ["Max"]);
it.addEmployee("MR.MANY");
it.addEmployee("MS.MONICA");
// it.employees[2] = "Anna";

it.describe();
it.printEmployeeInformation();

// const accountingCopy = { name: "DUMMY", describe: it.describe };
// accountingCopy.describe();

const accounting = new AccountingDepartment("d2", []);

accounting.mostRecentReport = "The report of Accounting";
accounting.addReport("Daily Meetings");
console.log(accounting.mostRecentReport);
// accounting.printReports();
accounting.describe();

accounting.addEmployee("Max");
accounting.addEmployee("Manu");

// accounting.printEmployeeInformation();
