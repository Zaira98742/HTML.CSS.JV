function isPalindrome(str) {
  let len = str.length;
  for (let i = 0; i < len / 2; i++) {
    if (str[i] !== str[len - 1 - i]) {
      return "khong phai chuoi doi xung";
    }
  }
  return "la chuoi doi xung";
}
function kiemTraChuoiDoiXung() {
  let chuoiNhap = prompt("Nhap chuoi ky tu:");
  if (chuoiNhap === null) {
    alert("Ban da huy bo nhap chuoi.");
    return;
  }
  let ketQua = isPalindrome(chuoiNhap);
  alert(ketQua);
}
kiemTraChuoiDoiXung();