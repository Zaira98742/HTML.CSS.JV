function quanLySach() {
  let danhSachSach = [];
  let cart = [];
  let nextId = 1;
  function hienThiSachTheoTheLoai(theLoai) {
    let ketQua = "Sach the loai " + theLoai + ":\n";
    let timThay = false;
    for (let i = 0; i < danhSachSach.length; i++) {
      let sach = danhSachSach[i];
      if (sach.category === theLoai) {
        ketQua += "ID: " + sach.id + ", Ten: " + sach.name + ", Gia: " + sach.price + ", So luong: " + sach.quantity + "\n";
        timThay = true;
      }
    }
    if (!timThay) {
      console.log("Khong tim thay sach the loai nay.");
      return;
    }
    console.log(ketQua);
  }
  function themSachMoi(name, price, quantity, category) {
    let sach = {
      id: nextId,
      name: name,
      price: price,
      quantity: quantity,
      category: category
    };
    danhSachSach.push(sach);
    nextId++;
    console.log("Da them sach moi.");
  }
  function timKiemSach(tuKhoa) {
    let ketQua = "Ket qua tim kiem:\n";
    let timThay = false;
    for (let i = 0; i < danhSachSach.length; i++) {
      let sach = danhSachSach[i];
      if (sach.name.toLowerCase().includes(tuKhoa.toLowerCase()) || String(sach.id).includes(tuKhoa)) {
        ketQua += "ID: " + sach.id + ", Ten: " + sach.name + ", Gia: " + sach.price + ", So luong: " + sach.quantity + ", The loai: " + sach.category + "\n";
        timThay = true;
      }
    }
    if (!timThay) {
      console.log("Khong tim thay sach.");
      return;
    }
    console.log(ketQua);
  }
  function muaSach(idSach, soLuong) {
    for (let i = 0; i < danhSachSach.length; i++) {
      let sach = danhSachSach[i];
      if (sach.id === idSach) {
        if (sach.quantity >= soLuong) {
          sach.quantity -= soLuong;
          cart.push({ ...sach, quantity: soLuong });
          console.log("Da mua sach.");
          return;
        } else {
          console.log("Khong du so luong sach trong kho.");
          return;
        }
      }
    }
    console.log("Khong tim thay sach.");
  }
  function sapXepSachTheoGia(tangDan) {
    danhSachSach.sort((a, b) => tangDan ? a.price - b.price : b.price - a.price);
    console.log("Da sap xep sach.");
  }
  function tinhTongTienGioHang() {
    let tongSoLuong = 0;
    let tongTien = 0;
    for (let i = 0; i < cart.length; i++) {
      tongSoLuong += cart[i].quantity;
      tongTien += cart[i].price * cart[i].quantity;
    }
    console.log("Tong so luong: " + tongSoLuong + ", Tong tien: " + tongTien);
  }
  function hienThiTongSoLuongSach() {
    let tongSoLuong = 0;
    for (let i = 0; i < danhSachSach.length; i++) {
      tongSoLuong += danhSachSach[i].quantity;
    }
    console.log("Tong so luong sach trong kho: " + tongSoLuong);
  }
  let luaChon;
  do {
    let menu = "Chon chuc nang:\n" +
      "1. Hien thi sach theo the loai\n" +
      "2. Them sach moi\n" +
      "3. Tim kiem sach\n" +
      "4. Mua sach\n" +
      "5. Sap xep sach theo gia\n" +
      "6. Tinh tong tien gio hang\n" +
      "7. Hien thi tong so luong sach\n" +
      "8. Thoat";
    console.log(menu);
    luaChon = prompt("Nhap lua chon cua ban:");
    switch (luaChon) {
      case "1":
        let theLoai = prompt("Nhap the loai:");
        hienThiSachTheoTheLoai(theLoai);
        break;
      case "2":
        let tenSach = prompt("Nhap ten sach:");
        let giaSach = parseFloat(prompt("Nhap gia sach:"));
        let soLuongSach = parseInt(prompt("Nhap so luong sach:"));
        let theLoaiSach = prompt("Nhap the loai sach:");
        themSachMoi(tenSach, giaSach, soLuongSach, theLoaiSach);
        break;
      case "3":
        let tuKhoa = prompt("Nhap tu khoa tim kiem:");
        timKiemSach(tuKhoa);
        break;
      case "4":
        let idSachMua = parseInt(prompt("Nhap ID sach can mua:"));
        let soLuongMua = parseInt(prompt("Nhap so luong mua:"));
        muaSach(idSachMua, soLuongMua);
        break;
      case "5":
        let sapXep = prompt("Sap xep tang dan (1) hay giam dan (2)?");
        sapXepSachTheoGia(sapXep === "1");
        break;
      case "6":
        tinhTongTienGioHang();
        break;
      case "7":
        hienThiTongSoLuongSach();
        break;
      case "8":
        break;
      default:
        console.log("Lua chon khong hop le.");
    }
  } while (luaChon !== "8");
}
quanLySach();