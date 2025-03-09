let n = prompt("Nhap so luong phan tu cua mang");
let mang = [];
if (n <= 0) {
  if (n == 0) {
    document.write("Mang khong co phan tu nao")
  } else {
    document.write("So luong phan tu khong duoc nho hon 0")
  }
} else {
  for (let i = 0; i < n; i++) {
    let giaTri = parseInt(prompt("Nhap gia tri phan tu thu " + (i + 1) + ":"))
    mang.push(giaTri)
  }
}
    let lonNhat = mang[0]
    let lonThuHai = mang[1]
    if (lonNhat < lonThuHai) {
      let temp = lonNhat
      lonNhat = lonThuHai
      lonThuHai = temp
    }
    for (let i = 2; i < mang.length; i++) {
      if (mang[i] > lonNhat) {
        lonThuHai = lonNhat
        lonNhat = mang[i]
      } else if (mang[i] > lonThuHai && mang[i] !== lonNhat) {
        lonThuHai = mang[i]
      }
    }
    document.write(lonThuHai);