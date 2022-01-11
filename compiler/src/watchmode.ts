type User = {name:string, age:number, rol: Roles, loissirs: (string|number)[]}
enum Roles {ASS=69, BOSS, NIGGA}

const usuario: User= {name:"Maxs", age:35, rol: Roles.ASS, loissirs:["playa", "arena", 69, "DECK",4]}


function descompose(user: User){
    const {name, rol} = user
    console.log(name);
    console.log(rol);
}
descompose(usuario);

const res = usuario.loissirs.map((val, index)=>{
    return val+" "+index
})
console.log(res);