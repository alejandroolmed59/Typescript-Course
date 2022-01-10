function switcheroo(x){
  return x.split('').map(val=>{
    return val=='a'?'b':val=='b'?'a':val
  }).join('')
}
console.log(switcheroo('banana'));