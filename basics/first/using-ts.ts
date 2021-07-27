const button = document.querySelector("button");
const input1 = document.getElementById("num1")! as HTMLInputElement;
const input2 = document.getElementById("num2")! as HTMLInputElement;

function add(num1: number, num2: number, mensaje: string, flag: boolean) {
  if (flag) {
    const res = num1+num2;
    console.log(mensaje,res);
  } else {

    return num1 + num2;
  }
}

const msg: string = "El resultado es: "
const flag: boolean = true

button.addEventListener("click", function () {
  console.log(add(Number.parseInt(input1.value), +input2.value, msg, flag));
});
