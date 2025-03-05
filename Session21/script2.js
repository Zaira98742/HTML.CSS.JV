let odd = 0;
let even = 0;
for (let i = 0; i < 5; i++) {
    let number = +prompt("moi nhap so nguyen");
    if (number % 2 !== 0) {
        odd++;
    } else {
        even++;
    }
}
alert("so chan la " + even + " so le la " + odd);