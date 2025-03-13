function quanLySinhVien() {
  let danhSachSinhVien = [];

  function nhapDanhSachSinhVien() {
    let soLuong = parseInt(prompt("Nhap so luong sinh vien:"));
    if (isNaN(soLuong) || soLuong <= 0) {
      alert("So luong sinh vien khong hop le.");
      return;
    }

    for (let i = 0; i < soLuong; i++) {
      let ten = prompt(`Nhap ten sinh vien thu ${i + 1}:`);
      danhSachSinhVien.push(ten);
    }
  }

  function hienThiDanhSachSinhVien() {
    if (danhSachSinhVien.length === 0) {
      alert("Danh sach sinh vien trong.");
      return;
    }

    alert("Danh sach sinh vien:\n" + danhSachSinhVien.join("\n"));
  }

  function timSinhVienTheoTen() {
    let tenTimKiem = prompt("Nhap ten sinh vien can tim:");
    let sinhVienTimThay = danhSachSinhVien.find(ten => ten === tenTimKiem);

    if (sinhVienTimThay) {
      alert(`Tim thay sinh vien: ${sinhVienTimThay}`);
    } else {
      alert("Khong tim thay sinh vien.");
    }
  }

  function xoaSinhVienKhoiDanhSach() {
    let tenXoa = prompt("Nhap ten sinh vien can xoa:");
    let viTriXoa = danhSachSinhVien.indexOf(tenXoa);

    if (viTriXoa !== -1) {
      danhSachSinhVien.splice(viTriXoa, 1);
      alert(`Da xoa sinh vien: ${tenXoa}`);
    } else {
      alert("Khong tim thay sinh vien de xoa.");
    }
  }

  function hienThiMenu() {
    return prompt(
      "Chon chuc nang:\n" +
      "1. Nhap danh sach sinh vien\n" +
      "2. Hien thi danh sach sinh vien\n" +
      "3. Tim sinh vien theo ten\n" +
      "4. Xoa sinh vien khoi danh sach\n" +
      "5. Thoat"
    );
  }

  let luaChon;
  do {
    luaChon = hienThiMenu();
    switch (luaChon) {
      case "1":
        nhapDanhSachSinhVien();
        break;
      case "2":
        hienThiDanhSachSinhVien();
        break;
      case "3":
        timSinhVienTheoTen();
        break;
      case "4":
        xoaSinhVienKhoiDanhSach();
        break;
      case "5":
        alert("Tam biet!");
        break;
      default:
        alert("Lua chon khong hop le.");
    }
  } while (luaChon !== "5");
}

quanLySinhVien();