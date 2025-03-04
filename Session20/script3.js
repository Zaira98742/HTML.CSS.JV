let number = prompt("nhap so bat ki:");
if (isNaN(number) || !Number.isInteger(+number)) {
    document.write("so khong hop le");
} else {
    let isPalindrome = true;
    let length = number.length;
    for (let i = 0; i < Math.floor(length / 2); i++) {
        if (number[i] !== number[length - 1 - i]) {
            isPalindrome = false;
            break;
        }
    }
    if (isPalindrome) {
        document.write("so nay doi xung");
    } else {
        document.write("so nay khong doi xung");
    }
}
