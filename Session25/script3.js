function timSoChan(mang) {
  if (Array.isArray(mang) === false) {
    return "du lieu khong hop le";
  }
  let soChan = [];
  for (let i = 0; i < mang.length; i++) {
    if (mang[i] % 2 === 0) {
      soChan.push(mang[i]);
    }
  }
  if (soChan.length === 0) {
    return "mang khong chua so chan";
  } else {
    return soChan.join(", ");
  }
}
console.log(timSoChan([11, 4, 65, 6]));
console.log(timSoChan([1, 3, 5, 17]));
console.log(timSoChan("text"));