function timSoNguyenTo(mang) {
  if (!Array.isArray(mang)) {
    return "Du lieu khong hop le";
  }
  const laSoNguyenTo = (so) => {
    if (so <= 1) return false;
    if (so <= 3) return true;
    if (so % 2 === 0 || so % 3 === 0) return false;
    for (let i = 5; i * i <= so; i += 6) {
      if (so % i === 0 || so % (i + 2) === 0) return false;
    }
    return true;
  };
  const ketQua = mang.filter(laSoNguyenTo);

  if (ketQua.length === 0) {
    return "Mang khong co phan tu nao";
  } else {
    return ketQua;
  }
}
console.log(timSoNguyenTo([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(timSoNguyenTo([]));
console.log(timSoNguyenTo("abc"));