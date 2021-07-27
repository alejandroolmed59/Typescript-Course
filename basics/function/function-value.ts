function addHandle(num1: number, num2: number, cb:(n: number)=>void) {
      let res = num1 + num2;
      cb(res);
}

addHandle(5,15, (final)=>{
    console.log(final);
});
