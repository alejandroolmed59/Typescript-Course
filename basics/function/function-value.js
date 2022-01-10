function addHandle(num1, num2, cb) {
    var res = num1 + num2;
    var avr = cb(res);
    console.log(avr);
}
addHandle(5, 15, function (final) {
    console.log(final);
    return true;
});
