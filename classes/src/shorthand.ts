class Department2 {
  // private id: string;
  // private name: string;
  static numeroDepa = "2222-0000"
  protected employees: string[] = [];

  constructor(private readonly id: string, public name: string) {
    // this.id = id;
    // this.name = n;
  }

  describe=() => {
    console.log(`Department (${this.id}): ${this.name}`);
  }

  addEmployee(employee: string) {
    // validation etc
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

const accounting2 = new Department2('d1', 'Accounting');

accounting2.addEmployee('Max');
accounting2.addEmployee('Manu');


export default Department2;
export {accounting2}