let num1 = prompt("Mời nhập vào một số bất kỳ");
let num2 = prompt("Mời nhập vào một số bất kỳ");
let num3 = prompt("Mời nhập vào một số bất kỳ");
if (num1 >= num2 && num1 >= num3) {
    biggest = num1;
}
else if (num2 >= num1 && num2 >= num3) {
    biggest = num2;
}
else {
    biggest = num3;
}
alert("số lớn nhất trong 3 số là " + biggest);