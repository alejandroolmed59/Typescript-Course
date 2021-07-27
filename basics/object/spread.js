var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var person1 = {
    name: "olms",
    age: 22
};
var copiedPers = person1;
var copiaReal = __assign({}, person1);
person1.age = 40;
console.log("Copia edad dir after: " + copiedPers.age);
console.log("Copia edad real after: " + copiaReal.age);
