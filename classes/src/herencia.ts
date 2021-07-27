import Department2, { accounting2 } from './shorthand'
class ItDepartment extends Department2 {
    protected admins: string[]
    constructor(id: string, admins: string[]) {
        super(id, "InfoTontos")
        this.admins = admins
    }
    addEmployee(employee: string) {

        if(!this.employees.some((emp)=>{
            if(emp===employee || employee==="Olms") return true
            else return false
        })){
            this.employees.push(employee);
        }
    }

}
class ContabilidadDep extends Department2{
    static numeroDepa = "2262-5263"
    protected reportes:string[] = []
    protected ultimoReporte=""

    constructor(id:string){
        super(id, "Contabilidad")
    }
    addReporte(reporte:string){
        this.reportes.push(reporte)
        this.ultimoReporte = reporte
    }
    get getUltimoReporte(){
        if(!this.ultimoReporte){
            throw new ReferenceError("No existe ultimo reporte")
        }else{
            return this.ultimoReporte
        }
    }
    set setUltimoReporte(rep: string){
        if(rep) this.addReporte(rep)
        else console.log("Reporte vacio");
    }
    static generateEmployee(nombre:string){
        return {nombre}
    }

}

let infoAmigos = new ItDepartment('db2', ["Olms", "Max"])
/*
infoAmigos.addEmployee("Harold")
infoAmigos.addEmployee("EthMAX")
infoAmigos.addEmployee("Olms")
infoAmigos.addEmployee("Harold")
infoAmigos.addEmployee("Ray")
infoAmigos.addEmployee("osia")
infoAmigos.addEmployee("Ray")
console.log(infoAmigos);

const econoAmigos = new ContabilidadDep("dc1")
try{
    console.log(econoAmigos.getUltimoReporte);
}catch(err){
    console.log(err);
}
econoAmigos.addEmployee("Ray")
econoAmigos.addReporte("Error linea 3")
econoAmigos.addReporte("No da el calculo :'0")
econoAmigos.addReporte("Se murio la calcu")
console.log(econoAmigos.getUltimoReporte);

econoAmigos.setUltimoReporte = ""

console.log(econoAmigos.getUltimoReporte)*/
console.log(Department2.numeroDepa)
console.log(ContabilidadDep.numeroDepa)
console.log(ContabilidadDep.generateEmployee("Gustavo"))