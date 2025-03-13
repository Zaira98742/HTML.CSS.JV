function tinhToan() {
  let so1 = parseFloat(prompt("Nhap so thu nhat:"));
  let so2 = parseFloat(prompt("Nhap so thu hai:"));
  function cong(a, b) {
    return a + b;
  }
  function tru(a, b) {
    return a - b;
  }
  function nhan(a, b) {
    return a * b;
  }
  function chia(a, b) {
    if (b === 0) {
      return "Khong the chia cho 0.";
    }
    return a / b;
  }
  function hienThiMenu() {
    return prompt(
      "Chon phep tinh:\n" +
      "1. Cong hai so\n" +
      "2. Tru hai so\n" +
      "3. Nhan hai so\n" +
      "4. Chia hai so\n" +
      "5. Thoat"
    );
  }
  let luaChon = hienThiMenu();
  while (luaChon != "5") {
    switch (luaChon) {
      case "1":
        console.log("Ket qua: " + cong(so1, so2));
        break;
      case "2":
        console.log("Ket qua: " + tru(so1, so2));
        break;
      case "3":
        console.log("Ket qua: " + nhan(so1, so2));
        break;
      case "4":
        console.log("Ket qua: " + chia(so1, so2));
        break;
      default:
        console.log("Lua chon khong hop le.");
    }
    luaChon = hienThiMenu();
  }
  console.log("Tam biet!");
}
tinhToan();