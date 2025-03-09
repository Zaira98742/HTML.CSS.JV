let n = parseInt(prompt("Nhap so luong phan tu cua mang:"));
let mang = [];
if (n <= 0) {
  if (n === 0) {
    document.write("Khong phai day so fibonacci");
  } else {
    document.write("So luong phan tu khong duoc nho hon 0");
  }
} else {
  for (let i = 0; i < n; i++) {
    let giaTri = parseInt(prompt("Nhap gia tri phan tu thu " + (i + 1) + ":"));
    mang.push(giaTri);
  }

  if (mang.length < 2) {
    document.write("Khong phai day so fibonacci");
  } else {
    let laFibonacci = true;
    if (mang[0] !== 0 || mang[1] !== 1) {
      laFibonacci = false;
    } else {
      for (let i = 2; i < mang.length; i++) {
        if (mang[i] !== mang[i - 1] + mang[i - 2]) {
          laFibonacci = false;
          break;
        }
      }
    }
    if (laFibonacci) {
      document.write("La day so fibonacci");
    } else {
      document.write("Khong phai day so fibonacci");
    }
  }
}