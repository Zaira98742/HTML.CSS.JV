let n = prompt("nhap so:");
n = Number(n);
if (!n || !Number.isInteger(n) || n < 2) {
    alert("khong phai so nguyen to");
} else {
    let num = true;
    for (let i = 2; i < n && num; i++) {
        if (n % i === 0) {
            num = false;
        }
    }
    if (num) {
        alert("la so nguyen to");
    } else {
        alert("ko so nguyen to");
    }
}
