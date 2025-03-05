let a = +prompt("nhap a = ");
let b = +prompt("nhap b = ");
let c = +prompt("nhap c = ");
if (a == 0) {
    if (b == 0) {
        if (c == 0) {
            alert('Phuong trinh vo so nghiem');
        } else {
            alert('Phuong trinh vo nghiem');
        }
    } else {
        let x = -c / b;
        alert("pt co nghiem" + x);
    }
} else {
    let dt = b * b - 4 * a * c;
    if (dt < 0) {
        alert("pt vo nghiem");
    } else if (dt == 0) {
        let x = -b / (2 * a);
        alert("pt co nghiem kep x1 = x2 = " + x);
    } else {
        let x1 = (-b + Math.sqrt(dt)) / (2 * a);
        let x2 = (-b - Math.sqrt(dt)) / (2 * a);
        alert(`pt co hai nghiem phan biet x1 = ${x1}, x2 = ${x2}`);
    }
}