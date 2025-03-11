function demSoNguyenDuong(mang) {
  if (!Array.isArray(mang)) {
    return "du lieu khong hop le";
  }
  let dem = 0;
  for (let i = 0; i < mang.length; i++) {
    if (Number.isInteger(mang[i]) && mang[i] > 0) {
      dem++;
    }
  }
  if (dem === 0) {
    return "khong co so nguyen duong trong mang";
  } else {
    return dem;
  }
}
console.log(demSoNguyenDuong([4, 5.4, 6, -2]));
console.log(demSoNguyenDuong([1, 2, 5, 7, -8, 6]));
console.log(demSoNguyenDuong([1.2, -3, -6]));