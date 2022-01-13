function Logger(msg: string){
    return (constructor: Function)=>{
        console.log(msg);
        console.log(constructor);
    }
}

@Logger('LOGGGGIN')
class PersonBoring {
    public name = "Max";
    public static lastyn : string
    constructor(){
        console.log("Person created");
    }
}
const max = new PersonBoring();
console.log(max);