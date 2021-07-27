"use strict";
class Facultad {
    constructor(id, nombreFac) {
        this.id = id;
        this.nombreFac = nombreFac;
    }
}
class FacMate extends Facultad {
    constructor(id) {
        super(id, "Matematicas");
        this.id = id;
    }
    describir() {
        return `Bienvenido a la facultad de ${this.nombreFac}`;
    }
}
class FacEconomia extends Facultad {
    constructor() {
        super("ec1", "Economía y finanzas");
    }
    describir() {
        return `Bienvenido a la facultad de ${this.nombreFac}`;
    }
    get getNombreFac() {
        return this.nombreFac;
    }
    set setNombreFac(nombre) {
        this.nombreFac = nombre;
    }
    static getInstance() {
        if (this.instance)
            return this.instance;
        else {
            this.instance = new FacEconomia();
            return this.instance;
        }
    }
}
const facMate = new FacMate("m1");
const factEcono = FacEconomia.getInstance();
const factEconoCopy = FacEconomia.getInstance();
console.log(factEcono);
console.log(factEconoCopy);
console.log(Math.max(3, 32, 6543, 2, 4));
