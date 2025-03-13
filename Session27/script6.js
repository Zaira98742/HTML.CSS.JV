function kiemTraCapSoCong(mang) {
  if (!Array.isArray(mang)) {
    return "du lieu khong hop le";
  }
  if (mang.length < 2) {
    return true;
  }
  let congSai = mang[1] - mang[0];
  for (let i = 2; i < mang.length; i++) {
    if (mang[i] - mang[i - 1] !== congSai) {
      return false;
    }
  }
  return true;
}
console.log(kiemTraCapSoCong([2, 4, 6, 8]));
console.log(kiemTraCapSoCong([3, 6, 9, 12, 14]));
console.log(kiemTraCapSoCong("abc"));