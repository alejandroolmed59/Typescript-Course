abstract class Department {
    protected employees: string[] = []

    constructor(protected readonly id:number, protected name:string){
    }

    abstract describe() :void;
    
    addEmployee(employee:string){
        this.employees.push(employee)
    }
    printEmployeesInfo(){
        console.log(this.employees.length);
        console.log(this.employees);
    }
}

class ItDepartment extends Department {
    public static numeroTel = '274324234';
    public admins : string[]
    constructor(id:number, admins: string[]){
        super(id, "Electrónica e informática");
        this.employees.push(...admins)
        this.admins = admins;   
    }
    describe(): void {
        console.log(`Bienvenidos a ingeniería hdpt #${this.id}`);;
    }
}
class AccountingDepartment extends Department{
    public static numeroTel = '274324231';
    private static instance: AccountingDepartment;
    private lastReport:string;

    private constructor(id:number, private reports: string[]) {
        super(id, "Accounting")
        this.lastReport = reports[0]
    }

    static getInstance(){
        if(AccountingDepartment.instance){
            return AccountingDepartment.instance;
        }else{
            AccountingDepartment.instance = new AccountingDepartment(1,  ["Perdí la empresa en el bajon de btc", "Nos liquidaron","Porqué ese numero es negativo"]);
            return AccountingDepartment.instance
        }
    }

    addReport(report:string){
        this.reports.push(report);
        this.lastReport = report;
    }
    get mostRecentReport(){
        if(this.lastReport){
            return this.lastReport
        }else{
            throw new Error("Report doesn't exist")
        }
    }
    set mostRecentReport(value:string){
        this.addReport(value);
    }

    describe() {
        console.log(`Econo chill ${this.id}`);
    }
 

}
 
//const accounting = new AccountingDepartment(1, ["Nos liquidaron","Porqué ese numero es negativo","Perdí la empresa en el bajon de btc"]);
const accounting = AccountingDepartment.getInstance();
const engineering = new ItDepartment(2, ["Sosa","Arguello"]);


engineering.addEmployee("Olme");
accounting.addEmployee("Will Casas");

//engineering.describe()
//accounting.describe()
accounting.mostRecentReport = "Btc a 22k lul"
console.log(accounting.mostRecentReport)