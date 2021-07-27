var sum = function () {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (acum, val) { return acum + val; }, 0);
};
console.log("res final " + sum(3, 2, 5.3, 10, 20, 123));
var hobbies = ["Sky", "crypto", "walk", "read", "tft"];
var hobby1 = hobbies[0], hobby2 = hobbies[1], remaining = hobbies.slice(2);
console.log(hobby1);
console.log(hobby2);
console.log(remaining);
