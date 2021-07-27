"use strict";
class Department {
    constructor(id, n) {
        this.direccion = "default sin constructor";
        this.employees = [];
        this.describe = () => {
            console.log('Department describe: ' + this.name);
        };
        this.addEmployee = (nombreEmp) => {
            this.employees.push(nombreEmp);
        };
        this.showEmployees = () => {
            console.log(this.employees.length);
            console.log(this.employees);
        };
        this.name = n;
        this.id = id;
    }
}
Department.osia = "NO necesito inicializacion lul";
const accounting = new Department('db1', 'Accounting');
accounting.addEmployee("Chris");
accounting.addEmployee("Mike");
accounting.addEmployee("Joe");
accounting.showEmployees();
console.log(Department.osia);
