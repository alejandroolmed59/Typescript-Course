"use strict";
var Roles;
(function (Roles) {
    Roles[Roles["ASS"] = 0] = "ASS";
    Roles[Roles["BOSS"] = 1] = "BOSS";
    Roles[Roles["NIGGA"] = 2] = "NIGGA";
})(Roles || (Roles = {}));
const usuario = { name: "mAX", age: 35, rol: Roles.NIGGA, loissirs: ["playa", "arena", "DECK", 4] };
function descompose(user) {
    const { name, rol } = user;
    console.log(name);
    console.log(rol);
}
console.log(usuario);
