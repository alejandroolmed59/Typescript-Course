

class Department {
    static osia="NO necesito inicializacion lul"
    id:string
    name: string
    direccion: string = "default sin constructor" 
    private employees: string[] =[]
   
    constructor(id:string, n: string) {
      this.name = n
      this.id = id
    }
   
    describe=()=> {
      console.log('Department describe: ' + this.name)
    }
    addEmployee=(nombreEmp:string)=>{
      this.employees.push(nombreEmp)
    }
    showEmployees=()=>{
      console.log(this.employees.length);
      console.log(this.employees);
    }
   
  }
   
const accounting = new Department('db1', 'Accounting')
//console.log(accounting.direccion);

accounting.addEmployee("Chris")  
accounting.addEmployee("Mike")  
accounting.addEmployee("Joe")
accounting.showEmployees()  

console.log(Department.osia)
//accounting.employees.pop()
//console.log(accounting.employees.some((val)=>val==='Mike'?true:false))

/*
  const accountingCopy : Department = {
    name:"FINANZAS ",
    direccion:"algo",
    describe: accounting.describe
  }*/
   

