function tinhToanHinhHoc() {
  function tinhDienTichHinhTron() {
    let r = parseFloat(prompt("Nhap ban kinh hinh tron:"));
    console.log("Dien tich hinh tron: " + Math.PI * r * r);
  }
  function tinhChuViHinhTron() {
    let r = parseFloat(prompt("Nhap ban kinh hinh tron:"));
    console.log("Chu vi hinh tron: " + 2 * Math.PI * r);
  }
  function tinhDienTichHinhChuNhat() {
    let chieuDai = parseFloat(prompt("Nhap chieu dai hinh chu nhat:"));
    let chieuRong = parseFloat(prompt("Nhap chieu rong hinh chu nhat:"));
    console.log("Dien tich hinh chu nhat: " + chieuDai * chieuRong);
  }
  function tinhChuViHinhChuNhat() {
    let chieuDai = parseFloat(prompt("Nhap chieu dai hinh chu nhat:"));
    let chieuRong = parseFloat(prompt("Nhap chieu rong hinh chu nhat:"));
    console.log("Chu vi hinh chu nhat: " + 2 * (chieuDai + chieuRong));
  }
  function hienThiMenu() {
    return prompt(
      "Chon phep tinh:\n" +
      "1. Tinh dien tich hinh tron\n" +
      "2. Tinh chu vi hinh tron\n" +
      "3. Tinh dien tich hinh chu nhat\n" +
      "4. Tinh chu vi hinh chu nhat\n" +
      "5. Thoat"
    );
  }
  let luaChon;
  while (luaChon !== "5") {
    luaChon = hienThiMenu();
    switch (luaChon) {
      case "1":
        tinhDienTichHinhTron();
        break;
      case "2":
        tinhChuViHinhTron();
        break;
      case "3":
        tinhDienTichHinhChuNhat();
        break;
      case "4":
        tinhChuViHinhChuNhat();
        break;
      case "5":
        break;
      default:
        console.log("Lua chon khong hop le.");
    }
  }
}
tinhToanHinhHoc();
