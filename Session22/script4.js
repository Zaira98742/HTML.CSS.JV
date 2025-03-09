let num = prompt("nhap vao day so:");
if (isNaN(num)) {
    document.write("day so khong hop le");
} else {
    let arr = Math.max(...num.split(""));
    document.write(`${arr} la so lon nhat trong day so`);
}