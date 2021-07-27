type Combinable = string | number;
type Des = 'isN' | 'isStr'
type Person = {name: string} | string;

function combine(input1: Combinable, input2: Combinable, conversion:Des){
    let res
    if(typeof input1 === 'number' && typeof input2==='number' && conversion==='isN'){
        res = input1+input2
    }else{
        res = input1.toString()+input2.toString()
    }
    return res;
}

let user: Person = {name:"rarw"}
console.log(user)

user = "james"
console.log(user);