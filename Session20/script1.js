let a = +prompt("nhap so bat ki");
if (a > 0 && Number.isInteger(a)) {
    let n = 0;
    for (let i = 1; i <= a; i++) {
        n += i;
    }
    alert("tong tat ca cac so nguyen la " + n);
} else {
    alert("khong hop le");
}
