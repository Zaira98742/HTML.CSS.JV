function quanLyNguoiDung() {
  let nguoiDung = [];
  function dangKy(ten, email, matKhau) {
    if (!email.includes("@") || (!email.endsWith(".com") && !email.endsWith(".vn"))) {
      return "Email khong hop le.";
    }
    if (matKhau.length < 6) {
      return "Mat khau phai tu 6 ky tu tro len.";
    }
    for (let i = 0; i < nguoiDung.length; i++) {
      if (nguoiDung[i].email === email) {
        return "Email da ton tai.";
      }
    }
    nguoiDung.push({ ten: ten, email: email, matKhau: matKhau });
    return "Dang ky thanh cong.";
  }
  function dangNhap(email, matKhau) {
    for (let i = 0; i < nguoiDung.length; i++) {
      if (nguoiDung[i].email === email && nguoiDung[i].matKhau === matKhau) {
        return nguoiDung[i];
      }
    }
    return "Dang nhap khong thanh cong.";
  }
  let luaChon;
  do {
    let menu = "Chon chuc nang:\n" +
      "1. Dang ky\n" +
      "2. Dang nhap\n" +
      "3. Thoat";
    luaChon = prompt(menu);
    switch (luaChon) {
      case "1":
        let tenDangKy = prompt("Nhap ten:");
        let emailDangKy = prompt("Nhap email:");
        let matKhauDangKy = prompt("Nhap mat khau:");
        console.log(dangKy(tenDangKy, emailDangKy, matKhauDangKy));
        break;
      case "2":
        let emailDangNhap = prompt("Nhap email:");
        let matKhauDangNhap = prompt("Nhap mat khau:");
        let nguoiDungDangNhap = dangNhap(emailDangNhap, matKhauDangNhap);
        if (typeof nguoiDungDangNhap === "object") {
          console.log("Dang nhap thanh cong. Thong tin nguoi dung:");
          console.log(nguoiDungDangNhap);
        } else {
          console.log(nguoiDungDangNhap);
        }
        break;
      case "3":
        console.log("Tam biet!");
        break;
      default:
        console.log("Lua chon khong hop le.");
    }
  } while (luaChon !== "3");
}
quanLyNguoiDung();