const names: Array<string> =  ["sad","happy"];
names[0].split(" ");

const promise = new Promise<string>((resolve, reject)=>{
    setTimeout(()=>{
        if(4<2){
            resolve("It's done!")
        }
        reject("Error dag")
    }, 4000)
    
})

promise.then((val)=>{
    console.log(val);
}).catch(e=>{
    console.log("chaseo porque "+e)
});