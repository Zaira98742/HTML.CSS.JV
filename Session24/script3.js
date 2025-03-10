let mang = [];
let luaChon;
while (luaChon !== 7) {
  luaChon = parseInt(prompt("Chon thao tac:\n1. Nhap mang\n2. Hien thi mang\n3. Tim phan tu lon nhat va chi so\n4. Tinh tong va trung binh cong so duong\n5. Dao nguoc mang\n6. Kiem tra mang doi xung\n7. Thoat"));
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
        let chiSoMax = 0;
        for (let i = 1; i < mang.length; i++) {
          if (mang[i] > max) {
            max = mang[i];
            chiSoMax = i;
          }
        }
        console.log("Phan tu lon nhat:", max, "Chi so:", chiSoMax);
      }
      break;
    case 4:
      let tongDuong = 0;
      let demDuong = 0;
      for (let i = 0; i < mang.length; i++) {
        if (mang[i] > 0) {
          tongDuong += mang[i];
          demDuong++;
        }
      }
      if (demDuong === 0) {
        console.log("Mang khong co so duong");
      } else {
        console.log("Tong so duong:", tongDuong, "Trung binh cong:", tongDuong / demDuong);
      }
      break;
    case 5:
      let mangDaoNguoc = [];
      for (let i = mang.length - 1; i >= 0; i--) {
        mangDaoNguoc.push(mang[i]);
      }
      mang = mangDaoNguoc;
      console.log("Mang sau khi dao nguoc:", mang);
      break;
    case 6:
      let doiXung = true;
      for (let i = 0; i < Math.floor(mang.length / 2); i++) {
        if (mang[i] !== mang[mang.length - 1 - i]) {
          doiXung = false;
          break;
        }
      }
      console.log("Mang co doi xung khong:", doiXung);
      break;
    case 7:
      console.log("Ket thuc chuong trinh");
      break;
    default:
      console.log("Lua chon khong hop le");
  }
}