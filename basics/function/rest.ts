const sum = (...numbers: number[]):number=>{
    return numbers.reduce((acum, val)=> acum+val,0)
}

console.log("res final "+ sum(3,2,5.3,10,20,123));

const hobbies = ["Sky", "crypto", "walk", "read","tft"]

const [hobby1, hobby2, ...remaining] = hobbies;

console.log(hobby1);
console.log(hobby2);
console.log(remaining);