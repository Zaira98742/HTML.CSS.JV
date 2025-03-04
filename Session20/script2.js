let a = +prompt("nhap so bat ki");
if (a > 0 && Number.isInteger(a)) {
    for (let i = 0; i <= a; i++) {
        if (i % 5 == 0) {
            document.write(i);
        }
    }
} else {
    alert("khong hop le");
}
