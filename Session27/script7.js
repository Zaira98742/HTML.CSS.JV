function timSoBiThieu(mang) {
  if (!Array.isArray(mang)) {
    return "dữ liệu không hợp lệ";
  }

  if (mang.length < 2) {
    return "không thể xác định";
  }

  mang.sort((a, b) => a - b);

  for (let i = 0; i < mang.length - 1; i++) {
    if (mang[i + 1] - mang[i] > 1) {
      return mang[i] + 1;
    }
  }

  return "không tìm thấy";
}

console.log(timSoBiThieu([1, 2, 3, 5]));
console.log(timSoBiThieu([1, 2, 4, 5]));
console.log(timSoBiThieu("abc"));