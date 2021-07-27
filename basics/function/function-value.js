"use strict";
function addHandle(num1, num2, cb) {
    let res = num1 + num2;
    cb(res);
}
addHandle(5, 15, (final) => {
    console.log(final);
});
