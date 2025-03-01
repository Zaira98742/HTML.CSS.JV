let a = Number(prompt("Nhập số thứ nhất:"));
let b = Number(prompt("Nhập số thứ hai:"));
let operation = prompt("Nhập phép tính (+, -, *, /):");
let result;
switch (operation) {
    case "+":
        result = a + b;
        break;
    case "-":
        result = a - b;
        break;
    case "*":
        result = a * b;
        break;
    case "/":
        if (a == 0 || b == 0) {
            alert("không thể chia cho 0");
        }
        else {
            result = a / b;
        }
        break;
    default:
        result = "Phép toán không hợp lệ";
}
alert(result);