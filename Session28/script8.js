let danhSachNhanVien = {};
let idCounter = 1;
let luaChon;
while (luaChon !== 5) {
  luaChon = +(prompt("Chon thao tac:\n1. Them nhan vien\n2. Xoa nhan vien\n3. Cap nhat luong\n4. Tim nhan vien\n5. Thoat"));
  switch (luaChon) {
    case 1:
      let ten = prompt("Nhap ten nhan vien:");
      let viTri = prompt("Nhap vi tri nhan vien:");
      let luong = parseInt(prompt("Nhap luong nhan vien:"));
      danhSachNhanVien[idCounter] = {
        id: idCounter,
        name: ten,
        position: viTri,
        salary: luong,
      };
      console.log(`Da them nhan vien voi ID ${idCounter}.`);
      idCounter++;
      break;
    case 2:
      let idXoa = parseInt(prompt("Nhap ID nhan vien can xoa:"));
      if (danhSachNhanVien[idXoa]) {
        if (confirm(`Ban co muon xoa nhan vien ${danhSachNhanVien[idXoa].name} khong?`)) {
          delete danhSachNhanVien[idXoa];
          console.log(`Da xoa nhan vien co ID ${idXoa}.`);
        } else {
          console.log("Huy bo thao tac xoa.");
        }
      } else {
        console.log("Khong tim thay nhan vien.");
      }
      break;
    case 3:
      let idCapNhat = parseInt(prompt("Nhap ID nhan vien can cap nhat luong:"));
      if (danhSachNhanVien[idCapNhat]) {
        let luongMoi = parseInt(prompt("Nhap luong moi:"));
        danhSachNhanVien[idCapNhat].salary = luongMoi;
        console.log(`Da cap nhat luong cho nhan vien co ID ${idCapNhat}.`);
      } else {
        console.log("Khong tim thay nhan vien.");
      }
      break;
    case 4:
      let tenTimKiem = prompt("Nhap ten nhan vien can tim:");
      let timThay = false;
      for (let id in danhSachNhanVien) {
        if (danhSachNhanVien[id].name.toLowerCase() === tenTimKiem.toLowerCase()) {
          console.log(`Tim thay nhan vien:\nID: ${danhSachNhanVien[id].id}, Ten: ${danhSachNhanVien[id].name}, Vi tri: ${danhSachNhanVien[id].position}, Luong: ${danhSachNhanVien[id].salary}`);
          timThay = true;
        }
      }
      if (!timThay) {
        console.log("Khong tim thay nhan vien.");
      }
      break;
    case 5:
      console.log("Ket thuc chuong trinh.");
      break;
    default:
      console.log("Lua chon khong hop le.");
  }
}