let sum = 0;
for (let i = 0; i < 5; i++) {
    let number = +prompt("moi nhap so nguyen");
    if (number % 2 !== 0) {
        sum += number;
    }
}
alert("tong cac so le la " + sum);