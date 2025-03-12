function timMaxVaViTri(mang) {
  if (!Array.isArray(mang)) {
    return "Du lieu khong hop le";
  }
  if (mang.length === 0) {
    return "Mang ko co du lieu";
  }
  const max = mang.reduce((max, num) => Math.max(max, num), mang[0]);
  const viTri = mang.indexOf(max);
  return `max = ${max}\nposition : ${viTri}`;
}
console.log(timMaxVaViTri([10, 9, 5, 11, 24, 5]));
console.log(timMaxVaViTri([]));
console.log(timMaxVaViTri("abc"));