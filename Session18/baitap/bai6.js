let year = Number(prompt("Mời bạn nhập một năm:"));
if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    alert(" là năm nhuận.");
} else {
    alert(" không phải là năm nhuận.");
}