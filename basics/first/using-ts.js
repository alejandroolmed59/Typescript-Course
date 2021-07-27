var button = document.querySelector("button");
var input1 = document.getElementById("num1");
var input2 = document.getElementById("num2");
function add(num1, num2, mensaje, flag) {
    if (flag) {
        var res = num1 + num2;
        console.log(mensaje, res);
    }
    else {
        return num1 + num2;
    }
}
var msg = "El resultado es: ";
var flag = true;
button.addEventListener("click", function () {
    console.log(add(Number.parseInt(input1.value), +input2.value, msg, flag));
});
