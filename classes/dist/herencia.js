"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const shorthand_1 = __importDefault(require("./shorthand"));
class ItDepartment extends shorthand_1.default {
    constructor(id, admins) {
        super(id, "InfoTontos");
        this.admins = admins;
    }
    addEmployee(employee) {
        if (!this.employees.some((emp) => {
            if (emp === employee || employee === "Olms")
                return true;
            else
                return false;
        })) {
            this.employees.push(employee);
        }
    }
}
class ContabilidadDep extends shorthand_1.default {
    constructor(id) {
        super(id, "Contabilidad");
        this.reportes = [];
        this.ultimoReporte = "";
    }
    addReporte(reporte) {
        this.reportes.push(reporte);
        this.ultimoReporte = reporte;
    }
    get getUltimoReporte() {
        if (!this.ultimoReporte) {
            throw new ReferenceError("No existe ultimo reporte");
        }
        else {
            return this.ultimoReporte;
        }
    }
    set setUltimoReporte(rep) {
        if (rep)
            this.addReporte(rep);
        else
            console.log("Reporte vacio");
    }
    static generateEmployee(nombre) {
        return { nombre };
    }
}
ContabilidadDep.numeroDepa = "2262-5263";
let infoAmigos = new ItDepartment('db2', ["Olms", "Max"]);
console.log(shorthand_1.default.numeroDepa);
console.log(ContabilidadDep.numeroDepa);
console.log(ContabilidadDep.generateEmployee("Gustavo"));
