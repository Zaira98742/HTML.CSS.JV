let chuoi = "";
let luaChon;
while (luaChon !== 7) {
  luaChon = parseInt(prompt("Chon thao tac:\n1. Nhap chuoi\n2. Hien thi chuoi\n3. Loai bo khoang trang dau cuoi\n4. Dao nguoc chuoi\n5. Dem so tu\n6. Tim kiem va thay the\n7. Thoat"));
  switch (luaChon) {
    case 1:
      chuoi = prompt("Nhap chuoi:");
      break;
    case 2:
      console.log("Chuoi:", chuoi);
      break;
    case 3:
      let batDau = 0;
      let ketThuc = chuoi.length - 1;
      while (batDau <= ketThuc && chuoi[batDau] === " ") {
        batDau++;
      }
      while (ketThuc >= batDau && chuoi[ketThuc] === " ") {
        ketThuc--;
      }
      chuoi = chuoi.substring(batDau, ketThuc + 1);
      console.log("Chuoi sau khi loai bo khoang trang:", chuoi);
      break;
    case 4:
      let chuoiDaoNguoc = "";
      for (let i = chuoi.length - 1; i >= 0; i--) {
        chuoiDaoNguoc += chuoi[i];
      }
      chuoi = chuoiDaoNguoc;
      console.log("Chuoi dao nguoc:", chuoi);
      break;
    case 5:
      let demTu = 0;
      let trongTu = false;
      for (let i = 0; i < chuoi.length; i++) {
        if (chuoi[i] !== " ") {
          if (!trongTu) {
            demTu++;
            trongTu = true;
          }
        } else {
          trongTu = false;
        }
      }
      console.log("So tu trong chuoi:", demTu);
      break;
    case 6:
      let kyTuTim = prompt("Nhap ky tu can tim:");
      let kyTuThayThe = prompt("Nhap ky tu thay the:");
      let chuoiMoi = "";
      for (let i = 0; i < chuoi.length; i++) {
        if (chuoi[i] === kyTuTim) {
          chuoiMoi += kyTuThayThe;
        } else {
          chuoiMoi += chuoi[i];
        }
      }
      chuoi = chuoiMoi;
      console.log("Chuoi sau khi thay the:", chuoi);
      break;
    case 7:
      console.log("Ket thuc chuong trinh");
      break;
    default:
      console.log("Lua chon khong hop le");
  }
}