let n = Number(prompt("nhap so nguyen:"));
if (!n || !Number.isInteger(n) || n < 2) {
    alert("ko phai so nguyen to");
} else {
    let isPrime = true;
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            isPrime = false;
            break;
        }
    }
    alert(isPrime ? "la so nguyen to" : "ko phai so nguyen to");
}