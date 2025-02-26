let num1 = +prompt("Nhập số thứ nhất:");
let num2 = +prompt("Nhập số thứ hai:");
let num3 = +prompt("Nhập số thứ ba:");
let maxNumber = num1
if (num2 > maxNumber) {
    maxNumber = num2
};
if (num3 > maxNumber) {
    maxNumber = num3
};
alert("Số lớn nhất trong 3 số là: " + maxNumber);