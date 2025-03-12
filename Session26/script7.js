function binhPhuongVaLocChan(mang) {
  if (!Array.isArray(mang)) {
    return "Du lieu khong hop le";
  }
  if (mang.length === 0) {
    return "Mang khong co du lieu";
  }
  let ketQua = mang
    .map((so) => so * so)
    .filter((soBinhPhuong) => soBinhPhuong % 2 === 0);

  return ketQua;
}
console.log(binhPhuongVaLocChan([2, 5, 10]));
console.log(binhPhuongVaLocChan([]));
console.log(binhPhuongVaLocChan("abc"));
