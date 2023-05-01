class Department {
  // name: string;
  // private readonly id: string
  protected employees: string[] = [];

  constructor(private readonly id: string, public name: string) {
    // this.name = n;
  }

  describe(this: Department) {
    console.log(`Department {this.id}: ${this.name}`);
  }

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
}

class AccountingDepartment extends Department {
  constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
  }

  addReport(text: string) {
    this.reports.push(text);
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

const it = new ITDepartment("d1", ["Max"]);
it.addEmployee("MR.MANY");
it.addEmployee("MS.MONICA");
// it.employees[2] = "Anna";

it.describe();
it.printEmployeeInformation();

// const accountingCopy = { name: "DUMMY", describe: it.describe };
// accountingCopy.describe();

const accounting = new AccountingDepartment("d2", []);
accounting.addReport("Daily Meetings");
accounting.printReports();

accounting.addEmployee("Max");
accounting.addEmployee("Manu");
accounting.printEmployeeInformation();
