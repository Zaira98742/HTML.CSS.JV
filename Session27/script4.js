function xuLySoNguyen() {
  let danhSachSoNguyen = [];
  function nhapDanhSachSoNguyen() {
    let input = prompt("Nhap danh sach so nguyen (cach nhau boi dau phay):");
    if (!input) return;
    let soNguyen = input.split(",").map(Number).filter(num => !isNaN(num) && Number.isInteger(num));
    danhSachSoNguyen = soNguyen;
    console.log("Danh sach so nguyen da nhap:", danhSachSoNguyen);
  }
  function tinhTrungBinh() {
    if (danhSachSoNguyen.length === 0) {
      console.log("Danh sach so nguyen trong.");
      return;
    }
    let tong = danhSachSoNguyen.reduce((sum, num) => sum + num, 0);
    let trungBinh = tong / danhSachSoNguyen.length;
    console.log("Trung binh cac so: " + trungBinh);
  }
  function timSoChanLonNhat() {
    if (danhSachSoNguyen.length === 0) {
      console.log("Danh sach so nguyen trong.");
      return;
    }
    let soChan = danhSachSoNguyen.filter(num => num % 2 === 0);
    if (soChan.length === 0) {
      console.log("Khong co so chan trong danh sach.");
      return;
    }
    let maxChan = Math.max(...soChan);
    console.log("So chan lon nhat: " + maxChan);
  }
  function timSoLeNhoNhat() {
    if (danhSachSoNguyen.length === 0) {
      console.log("Danh sach so nguyen trong.");
      return;
    }
    let soLe = danhSachSoNguyen.filter(num => num % 2 !== 0);
    if (soLe.length === 0) {
      console.log("Khong co so le trong danh sach.");
      return;
    }
    let minLe = Math.min(...soLe);
    console.log("So le nho nhat: " + minLe);
  }
  function hienThiMenu() {
    return prompt(
      "Chon chuc nang:\n" +
      "1. Nhap danh sach so nguyen\n" +
      "2. Tinh trung binh cac so\n" +
      "3. Tim so chan lon nhat\n" +
      "4. Tim so le nho nhat\n" +
      "5. Thoat"
    );
  }
  let luaChon;
  do {
    luaChon = hienThiMenu();
    switch (luaChon) {
      case "1":
        nhapDanhSachSoNguyen();
        break;
      case "2":
        tinhTrungBinh();
        break;
      case "3":
        timSoChanLonNhat();
        break;
      case "4":
        timSoLeNhoNhat();
        break;
      case "5":
        break;
      default:
        console.log("Lua chon khong hop le.");
    }
  } while (luaChon !== "5");
}
xuLySoNguyen();