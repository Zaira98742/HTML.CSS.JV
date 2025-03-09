let input = +prompt("nhap vao day so:");
if (!Number.isInteger(input)) {
    document.write("day khong hop le");
} else {
    let reversed = input.toString().split("").reverse().join("");
    document.write(reversed)
}