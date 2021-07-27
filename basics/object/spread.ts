const person1 = {
    name:"olms",
    age:22
}


const copiedPers = person1
const copiaReal = {...person1}
person1.age =40
console.log("Copia edad dir after: "+copiedPers.age );
console.log("Copia edad real after: "+copiaReal.age );
