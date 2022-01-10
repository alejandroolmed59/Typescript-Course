"use strict";
var Roles;
(function (Roles) {
    Roles[Roles["ASS"] = 69] = "ASS";
    Roles[Roles["BOSS"] = 70] = "BOSS";
    Roles[Roles["NIGGA"] = 71] = "NIGGA";
})(Roles || (Roles = {}));
var usuario = { name: "osia musical", age: 35, rol: Roles.ASS, loissirs: ["playa", "arena", 69, "DECK", 4] };
function descompose(user) {
    var name = user.name, rol = user.rol;
    console.log(name);
    console.log(rol);
}
descompose(usuario);
var res = usuario.loissirs.map(function (val, index) {
    return val + " " + index;
});
console.log(res);
