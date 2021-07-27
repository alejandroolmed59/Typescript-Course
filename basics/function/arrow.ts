const minus:(a:number|string, b?:string|number)=>string = (a1,b1=40) =>{
    if(typeof a1==='number' && typeof b1==='number'){
        return (a1-b1).toString()
    }else if(typeof a1==='string' && typeof b1==='string'){
        return (Number.parseInt(a1)-Number.parseInt(b1)).toString()
    }
    return ""
}

const plus = (a:number, b:number=15):number=>a+b

console.log(minus(33));
console.log(plus(3));