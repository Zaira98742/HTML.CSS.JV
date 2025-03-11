function kiemTraSoNguyenTo(n) {
  if (typeof n !== 'number' || n <= 0 || !Number.isInteger(n)) {
    return "du lieu khong hop le";
  }
  if (n <= 1) {
    return "khong phai la so nguyen to";
  }
  if (n <= 3) {
    return "la so nguyen to";
  }
  if (n % 2 === 0 || n % 3 === 0) {
    return "khong phai la so nguyen to";
  }
  for (let i = 5; i * i <= n; i += 6) {
    if (n % i === 0 || n % (i + 2) === 0) {
      return "khong phai la so nguyen to";
    }
  }
  return "la so nguyen to";
}
function nhapSoNguyen() {
  let input = prompt("Nhap vao mot so nguyen duong:");
  let soNguyen = parseInt(input);
  if (isNaN(soNguyen)) {
    alert("Du lieu khong hop le. Vui long nhap lai.");
    return;
  }
  let ketQua = kiemTraSoNguyenTo(soNguyen);
  alert(ketQua);
}
nhapSoNguyen();