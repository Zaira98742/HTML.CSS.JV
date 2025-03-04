let a = prompt("nhap so a:");
let b = prompt("nhap so b:");
a = Number(a);
b = Number(b);
if ((!a && a !== 0) || (!b && b !== 0) || !Number.isInteger(b)) {
    alert("kong hop le");
} else {
    let result = 1;
    for (let i = 0; i < Math.abs(b); i++) {
        result *= a;
    }
    if (b < 0) {
        result = 1 / result;
    }
    alert("ket qua: " + result);
}