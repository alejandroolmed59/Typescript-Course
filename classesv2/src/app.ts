interface Named {
    readonly name?: string;
    outpoutName?:string;
}

interface Greetable extends Named {
    greet(phrase:string):void;
}
class Person implements Greetable {
    public name?: string;
    public age: number;
    
    greet(phrase: string): void {
        console.log(`${this.name || "user"} dice ${phrase}`);
    }

    constructor(age:number, name?:string){
        if(name){
            this.name = name;
        }
        this.age = age;
    }
    
    
}

let p1 = new Person(21, "alej");
p1.greet("osi osi")
