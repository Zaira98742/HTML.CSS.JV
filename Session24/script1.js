let mang = [];
let luaChon;
while (luaChon!=7) {
  luaChon = parseInt(prompt("Chon thao tac:\n1. Nhap mang\n2. Hien thi mang\n3. Tim phan tu lon nhat va nho nhat\n4. Tinh tong cac phan tu\n5. Tim so lan xuat hien\n6. Sap xep tang dan\n7. Thoat"));
  switch (luaChon) {
    case 1:
      mang = prompt("Nhap mang (cac so cach nhau boi dau phay):").split(",").map(Number);
      break;
    case 2:
      console.log("Mang:", mang);
      break;
    case 3:
      if (mang.length === 0) {
        console.log("Mang rong");
      } else {
        let max = mang[0];
        let min = mang[0];
        for (let i = 1; i < mang.length; i++) {
          if (mang[i] > max) {
            max = mang[i];
          }
          if (mang[i] < min) {
            min = mang[i];
          }
        }
        console.log("Lon nhat:", max, "Nho nhat:", min);
      }
      break;
    case 4:
      if (mang.length === 0) {
        console.log("Mang rong");
      } else {
        let tong = 0;
        for (let i = 0; i < mang.length; i++) {
          tong += mang[i];
        }
        console.log("Tong:", tong);
      }
      break;
    case 5:
      let phanTuTim = parseInt(prompt("Nhap phan tu can tim:"));
      let dem = 0;
      for (let i = 0; i < mang.length; i++) {
        if (mang[i] === phanTuTim) {
          dem++;
        }
      }
      console.log("So lan xuat hien:", dem);
      break;
    case 6:
      for (let i = 0; i < mang.length - 1; i++) {
        for (let j = i + 1; j < mang.length; j++) {
          if (mang[i] > mang[j]) {
            let temp = mang[i];
            mang[i] = mang[j];
            mang[j] = temp;
          }
        }
      }
      console.log("Mang sau khi sap xep:", mang);
      break;
    case 7:
      break;
    default:
      console.log("Lua chon khong hop le.");
  }
}