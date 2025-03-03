let a = prompt("Mời nhập nhập ký tự bất kỳ");
if (a < 9) {
    alert("không phải chữ cái");
} else if (a.length === 1) {
    alert("ký tự " + a + " là chữ cái");
} else {
    alert("không phải chữ cái");
}