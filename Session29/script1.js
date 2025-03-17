function quanLyDanhBa() {
  let danhBa = [];
  let nextId = 1;
  function themContact() {
    let name = prompt("Nhap ten:");
    let email = prompt("Nhap email:");
    let phone = prompt("Nhap so dien thoai:");
    let contact = {
      id: nextId,
      name: name,
      email: email,
      phone: phone
    };
    danhBa.push(contact);
    nextId++;
    console.log("Da them contact.");
  }
  function hienThiDanhBa() {
    if (danhBa.length === 0) {
      console.log("Danh ba trong.");
      return;
    }

    console.log("Danh ba:");
    for (let i = 0; i < danhBa.length; i++) {
      let contact = danhBa[i];
      console.log("ID: " + contact.id + ", Ten: " + contact.name + ", Email: " + contact.email + ", Phone: " + contact.phone);
    }
  }
  function timContactTheoPhone() {
    let phoneTimKiem = prompt("Nhap so dien thoai can tim:");
    for (let i = 0; i < danhBa.length; i++) {
      let contact = danhBa[i];
      if (contact.phone === phoneTimKiem) {
        console.log("Tim thay contact:");
        console.log("ID: " + contact.id + ", Ten: " + contact.name + ", Email: " + contact.email + ", Phone: " + contact.phone);
        return;
      }
    }
    console.log("Khong tim thay contact.");
  }
  function capNhatContact() {
    let idCapNhat = parseInt(prompt("Nhap ID contact can cap nhat:"));
    for (let i = 0; i < danhBa.length; i++) {
      let contact = danhBa[i];
      if (contact.id === idCapNhat) {
        contact.name = prompt("Nhap ten moi:");
        contact.email = prompt("Nhap email moi:");
        contact.phone = prompt("Nhap so dien thoai moi:");
        console.log("Da cap nhat contact.");
        return;
      }
    }
    console.log("Khong tim thay contact.");
  }
  function xoaContact() {
    let idXoa = parseInt(prompt("Nhap ID contact can xoa:"));
    for (let i = 0; i < danhBa.length; i++) {
      if (danhBa[i].id === idXoa) {
        danhBa.splice(i, 1);
        console.log("Da xoa contact.");
        return;
      }
    }
    console.log("Khong tim thay contact.");
  }
  function hienThiMenu() {
    return prompt(
      "Chon chuc nang:\n" +
      "1. Them contact\n" +
      "2. Hien thi danh ba\n" +
      "3. Tim contact theo phone\n" +
      "4. Cap nhat contact\n" +
      "5. Xoa contact\n" +
      "6. Thoat"
    );
  }
  let luaChon;
  do {
    luaChon = hienThiMenu();
    switch (luaChon) {
      case "1":
        themContact();
        break;
      case "2":
        hienThiDanhBa();
        break;
      case "3":
        timContactTheoPhone();
        break;
      case "4":
        capNhatContact();
        break;
      case "5":
        xoaContact();
        break;
      case "6":
        console.log("Tam biet!");
        break;
      default:
        console.log("Lua chon khong hop le.");
    }
  } while (luaChon !== "6");
}
quanLyDanhBa();