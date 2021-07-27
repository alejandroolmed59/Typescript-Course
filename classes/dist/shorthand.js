"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.accounting2 = void 0;
class Department2 {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
        this.describe = () => {
            console.log(`Department (${this.id}): ${this.name}`);
        };
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
Department2.numeroDepa = "2222-0000";
const accounting2 = new Department2('d1', 'Accounting');
exports.accounting2 = accounting2;
accounting2.addEmployee('Max');
accounting2.addEmployee('Manu');
exports.default = Department2;
