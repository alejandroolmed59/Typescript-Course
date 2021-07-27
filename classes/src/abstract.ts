abstract class Facultad{
    constructor(protected readonly id:string, protected nombreFac:string){}

    abstract describir():string;
}
class FacMate extends Facultad{

    constructor(readonly id:string){
        super(id, "Matematicas")
    }
    describir(): string {
        return `Bienvenido a la facultad de ${this.nombreFac}`
    }
}
class FacEconomia extends Facultad{
    private static instance: FacEconomia;
    private constructor(){
        super("ec1", "Economía y finanzas")
    }
    describir(): string {
        return `Bienvenido a la facultad de ${this.nombreFac}`
    }
    get getNombreFac(){
        return this.nombreFac
    }
    set setNombreFac(nombre:string){
        this.nombreFac = nombre
    }
    static getInstance(){
        if(this.instance) return this.instance
        else{
            this.instance = new FacEconomia()
            return this.instance;
        }
    }
}

const facMate = new FacMate("m1")
const factEcono = FacEconomia.getInstance()
const factEconoCopy = FacEconomia.getInstance()

//console.log(facMate.describir())
console.log(factEcono)
console.log(factEconoCopy)
console.log(Math.max(3,32,6543,2,4))