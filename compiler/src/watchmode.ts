type User = {name:string, age:number, rol: Roles, loissirs: (string|number)[]}
enum Roles {ASS, BOSS, NIGGA}

const usuario: User= {name:"mAX", age:35, rol:Roles.NIGGA, loissirs:["playa", "arena", "DECK",4]}


function descompose(user: User){
    const {name, rol} = user
    console.log(name);
    console.log(rol);
}

console.log(usuario);