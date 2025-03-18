function quanLyDienThoai() {
  let danhSachDienThoai = [];
  let cart = [];
  let nextId = 1;
  function hienThiDienThoaiTheoHang(hang) {
    let ketQua = "Dien thoai hang " + hang + ":\n";
    let timThay = false;
    for (let i = 0; i < danhSachDienThoai.length; i++) {
      let dienThoai = danhSachDienThoai[i];
      if (dienThoai.company === hang) {
        ketQua += "ID: " + dienThoai.id + ", Ten: " + dienThoai.name + ", Gia: " + dienThoai.price + ", So luong: " + dienThoai.quantity + "\n";
        timThay = true;
      }
    }
    if (!timThay) {
      console.log("Khong tim thay dien thoai hang nay.");
      return;
    }
    console.log(ketQua);
  }
  function themDienThoaiMoi(name, price, quantity, company) {
    let dienThoai = {
      id: nextId,
      name: name,
      price: price,
      quantity: quantity,
      company: company
    };
    danhSachDienThoai.push(dienThoai);
    nextId++;
    console.log("Da them dien thoai moi.");
  }
  function timKiemDienThoai(tuKhoa) {
    let ketQua = "Ket qua tim kiem:\n";
    let timThay = false;
    for (let i = 0; i < danhSachDienThoai.length; i++) {
      let dienThoai = danhSachDienThoai[i];
      if (dienThoai.name.toLowerCase().includes(tuKhoa.toLowerCase()) || String(dienThoai.id).includes(tuKhoa)) {
        ketQua += "ID: " + dienThoai.id + ", Ten: " + dienThoai.name + ", Gia: " + dienThoai.price + ", So luong: " + dienThoai.quantity + ", Hang: " + dienThoai.company + "\n";
        timThay = true;
      }
    }
    if (!timThay) {
      console.log("Khong tim thay dien thoai.");
      return;
    }
    console.log(ketQua);
  }
  function muaDienThoai(idDienThoai, soLuong) {
    for (let i = 0; i < danhSachDienThoai.length; i++) {
      let dienThoai = danhSachDienThoai[i];
      if (dienThoai.id === idDienThoai) {
        if (dienThoai.quantity >= soLuong) {
          dienThoai.quantity -= soLuong;
          cart.push({ ...dienThoai, quantity: soLuong });
          console.log("Da mua dien thoai.");
          return;
        } else {
          console.log("Khong du so luong dien thoai trong kho.");
          return;
        }
      }
    }
    console.log("Khong tim thay dien thoai.");
  }
  function thanhToanGioHang() {
    let tongTien = 0;
    for (let i = 0; i < cart.length; i++) {
      tongTien += cart[i].price * cart[i].quantity;
    }
    console.log("Thanh toan thanh cong. Tong tien: " + tongTien);
    cart = [];
  }
  function sapXepDienThoaiTheoGia(tangDan) {
    danhSachDienThoai.sort((a, b) => tangDan ? a.price - b.price : b.price - a.price);
    console.log("Da sap xep dien thoai.");
  }
  function tinhTongTienDienThoaiTrongKho() {
    let tongTien = 0;
    for (let i = 0; i < danhSachDienThoai.length; i++) {
      tongTien += danhSachDienThoai[i].price * danhSachDienThoai[i].quantity;
    }
    console.log("Tong tien dien thoai trong kho: " + tongTien);
  }
  function hienThiTongSoLuongDienThoaiTheoHang() {
    let thongKe = {};
    for (let i = 0; i < danhSachDienThoai.length; i++) {
      let hang = danhSachDienThoai[i].company;
      if (thongKe[hang]) {
        thongKe[hang] += danhSachDienThoai[i].quantity;
      } else {
        thongKe[hang] = danhSachDienThoai[i].quantity;
      }
    }
    let ketQua = "Thong ke so luong dien thoai theo hang:\n";
    for (let hang in thongKe) {
      ketQua += hang + ": " + thongKe[hang] + "\n";
    }
    console.log(ketQua);
  }
  let luaChon;
  do {
    let menu = "Chon chuc nang:\n" +
      "1. Hien thi dien thoai theo hang\n" +
      "2. Them dien thoai moi\n" +
      "3. Tim kiem dien thoai\n" +
      "4. Mua dien thoai\n" +
      "5. Thanh toan gio hang\n" +
      "6. Sap xep dien thoai theo gia\n" +
      "7. Tinh tong tien dien thoai trong kho\n" +
      "8. Hien thi tong so luong dien thoai theo hang\n" +
      "9. Thoat";
    console.log(menu);
    luaChon = prompt("Nhap lua chon cua ban:");
    switch (luaChon) {
      case "1":
        let hang = prompt("Nhap hang dien thoai:");
        hienThiDienThoaiTheoHang(hang);
        break;
      case "2":
        let tenDienThoai = prompt("Nhap ten dien thoai:");
        let giaDienThoai = parseFloat(prompt("Nhap gia dien thoai:"));
        let soLuongDienThoai = parseInt(prompt("Nhap so luong dien thoai:"));
        let hangDienThoai = prompt("Nhap hang dien thoai:");
        themDienThoaiMoi(tenDienThoai, giaDienThoai, soLuongDienThoai, hangDienThoai);
        break;
      case "3":
        let tuKhoa = prompt("Nhap tu khoa tim kiem:");
        timKiemDienThoai(tuKhoa);
        break;
      case "4":
        let idDienThoaiMua = parseInt(prompt("Nhap ID dien thoai can mua:"));
        let soLuongMua = parseInt(prompt("Nhap so luong mua:"));
        muaDienThoai(idDienThoaiMua, soLuongMua);
        break;
      case "5":
        thanhToanGioHang();
        break;
      case "6":
        let sapXep = prompt("Sap xep tang dan (1) hay giam dan (2)?");
        sapXepDienThoaiTheoGia(sapXep === "1");
        break;
      case "7":
        tinhTongTienDienThoaiTrongKho();
        break;
      case "8":
        hienThiTongSoLuongDienThoaiTheoHang();
        break;
      case "9":
        console.log("Tam biet!");
        break;
      default:
        console.log("Lua chon khong hop le.");
    }
  } while (luaChon !== "9");
}
quanLyDienThoai();