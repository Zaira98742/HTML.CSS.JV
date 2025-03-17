function quanLySanPham() {
  let danhSachSanPham = [];
  let nextId = 1;
  function themSanPham(name, price, category, quantity) {
    let sanPham = {
      id: nextId,
      name: name,
      price: price,
      category: category,
      quantity: quantity
    };
    danhSachSanPham.push(sanPham);
    nextId++;
    return "Da them san pham.";
  }
  function hienThiDanhSachSanPham() {
    if (danhSachSanPham.length === 0) {
      return "Danh sach san pham trong.";
    }
    let ketQua = "Danh sach san pham:\n";
    for (let i = 0; i < danhSachSanPham.length; i++) {
      let sanPham = danhSachSanPham[i];
      ketQua += "ID: " + sanPham.id + ", Ten: " + sanPham.name + ", Gia: " + sanPham.price + ", Danh muc: " + sanPham.category + ", So luong: " + sanPham.quantity + "\n";
    }
    return ketQua;
  }
  function hienThiChiTietSanPham(idTimKiem) {
    for (let i = 0; i < danhSachSanPham.length; i++) {
      let sanPham = danhSachSanPham[i];
      if (sanPham.id === idTimKiem) {
        return "Chi tiet san pham:\nID: " + sanPham.id + ", Ten: " + sanPham.name + ", Gia: " + sanPham.price + ", Danh muc: " + sanPham.category + ", So luong: " + sanPham.quantity;
      }
    }
    return "Khong tim thay san pham.";
  }
  function capNhatSanPham(idCapNhat, name, price, category, quantity) {
    for (let i = 0; i < danhSachSanPham.length; i++) {
      if (danhSachSanPham[i].id === idCapNhat) {
        danhSachSanPham[i].name = name;
        danhSachSanPham[i].price = price;
        danhSachSanPham[i].category = category;
        danhSachSanPham[i].quantity = quantity;
        return "Da cap nhat san pham.";
      }
    }
    return "Khong tim thay san pham.";
  }
  function xoaSanPham(idXoa) {
    for (let i = 0; i < danhSachSanPham.length; i++) {
      if (danhSachSanPham[i].id === idXoa) {
        danhSachSanPham.splice(i, 1);
        return "Da xoa san pham.";
      }
    }
    return "Khong tim thay san pham.";
  }
  function locSanPhamTheoGia(giaMin, giaMax) {
    let ketQua = "San pham trong khoang gia " + giaMin + " - " + giaMax + ":\n";
    let timThay = false;
    for (let i = 0; i < danhSachSanPham.length; i++) {
      let sanPham = danhSachSanPham[i];
      if (sanPham.price >= giaMin && sanPham.price <= giaMax) {
        ketQua += "ID: " + sanPham.id + ", Ten: " + sanPham.name + ", Gia: " + sanPham.price + ", Danh muc: " + sanPham.category + ", So luong: " + sanPham.quantity + "\n";
        timThay = true;
      }
    }
    if (!timThay) {
      return "Khong tim thay san pham trong khoang gia nay.";
    }
    return ketQua;
  }
  function hienThiMenu() {
    return prompt(
      "Chon chuc nang:\n" +
      "1. Them san pham\n" +
      "2. Hien thi tat ca san pham\n" +
      "3. Hien thi chi tiet san pham theo ID\n" +
      "4. Cap nhat san pham theo ID\n" +
      "5. Xoa san pham theo ID\n" +
      "6. Loc san pham theo khoang gia\n" +
      "7. Thoat"
    );
  }
  let luaChon;
  do {
    luaChon = hienThiMenu();
    switch (luaChon) {
      case "1":
        let name = prompt("Nhap ten san pham:");
        let price = parseFloat(prompt("Nhap gia san pham:"));
        let category = prompt("Nhap danh muc san pham:");
        let quantity = parseInt(prompt("Nhap so luong san pham:"));
        console.log(themSanPham(name, price, category, quantity));
        break;
      case "2":
        console.log(hienThiDanhSachSanPham());
        break;
      case "3":
        let idTimKiem = parseInt(prompt("Nhap ID san pham can xem chi tiet:"));
        console.log(hienThiChiTietSanPham(idTimKiem));
        break;
      case "4":
        let idCapNhat = parseInt(prompt("Nhap ID san pham can cap nhat:"));
        let nameMoi = prompt("Nhap ten moi:");
        let priceMoi = parseFloat(prompt("Nhap gia moi:"));
        let categoryMoi = prompt("Nhap danh muc moi:");
        let quantityMoi = parseInt(prompt("Nhap so luong moi:"));
        console.log(capNhatSanPham(idCapNhat, nameMoi, priceMoi, categoryMoi, quantityMoi));
        break;
      case "5":
        let idXoa = parseInt(prompt("Nhap ID san pham can xoa:"));
        console.log(xoaSanPham(idXoa));
        break;
      case "6":
        let giaMin = parseFloat(prompt("Nhap gia min:"));
        let giaMax = parseFloat(prompt("Nhap gia max:"));
        console.log(locSanPhamTheoGia(giaMin, giaMax));
        break;
      case "7":
        break;
      default:
        console.log("Lua chon khong hop le.");
    }
  } while (luaChon !== "7");
}
quanLySanPham();