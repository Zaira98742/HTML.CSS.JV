let products = [
  {
    id: 1,
    name: "mèn mén",
    quantity: 20,
    category: "món ăn dân tộc Mòng",
    price: 20000,
  },
  {
    id: 2,
    name: "mứt",
    price: 80000,
    quantity: 21,
    category: "món ăn dân tộc Kinh",
  },
  {
    id: 3,
    name: "com lam",
    price: 40000,
    quantity: 15,
    category: "món ăn dân tộc Mông",
  },
  {
    id: 4,
    name: "bánh đậu xanh",
    price: 60000,
    quantity: 30,
    category: "món ăn dân tộc Kinh",
  },
];
let cart = [];
let luaChon;
while (luaChon !== 5) {
  luaChon = parseInt(prompt("Chon thao tac:\n1. Hien thi san pham theo danh muc\n2. Mua san pham\n3. Sap xep san pham theo gia\n4. Tinh tien thanh toan\n5. Thoat"));
  switch (luaChon) {
    case 1:
      let danhMucTim = prompt("Nhap ten danh muc:");
      let timThayDanhMuc = false;
      for (let i = 0; i < products.length; i++) {
        if (products[i].category === danhMucTim) {
          console.log(`- ${products[i].name} (ID: ${products[i].id}), Gia: ${products[i].price}`);
          timThayDanhMuc = true;
        }
      }
      if (!timThayDanhMuc) {
        console.log("Khong tim thay danh muc.");
      }
      break;
    case 2:
      let idMua = parseInt(prompt("Nhap ID san pham can mua:"));
      let sanPhamMua;
      for (let i = 0; i < products.length; i++) {
        if (products[i].id === idMua) {
          sanPhamMua = products[i];
          break;
        }
      }
      if (!sanPhamMua) {
        console.log("San pham khong ton tai.");
      } else {
        let soLuongMua = parseInt(prompt(`Nhap so luong ${sanPhamMua.name} muon mua:`));
        if (sanPhamMua.quantity >= soLuongMua) {
          cart.push({
            id: sanPhamMua.id,
            name: sanPhamMua.name,
            price: sanPhamMua.price,
            quantity: soLuongMua,
          });
          sanPhamMua.quantity -= soLuongMua;
          console.log(`Da them ${soLuongMua} ${sanPhamMua.name} vao gio hang.`);
        } else if (sanPhamMua.quantity === 0) {
          console.log("San pham het hang.");
        } else {
          console.log(`Chi con ${sanPhamMua.quantity} san pham trong kho.`);
        }
      }
      break;
    case 3:
      let luaChonSapXep = prompt("Sap xep tang dan (t) hay giam dan (g)?");
      if (luaChonSapXep === "t") {
        for (let i = 0; i < products.length - 1; i++) {
          for (let j = i + 1; j < products.length; j++) {
            if (products[i].price > products[j].price) {
              let temp = products[i];
              products[i] = products[j];
              products[j] = temp;
            }
          }
        }
      } else if (luaChonSapXep === "g") {
        for (let i = 0; i < products.length - 1; i++) {
          for (let j = i + 1; j < products.length; j++) {
            if (products[i].price < products[j].price) {
              let temp = products[i];
              products[i] = products[j];
              products[j] = temp;
            }
          }
        }
      } else {
        console.log("Lua chon khong hop le.");
        break;
      }
      console.log("Da sap xep san pham.");
      break;
    case 4:
      let tongTien = 0;
      for (let i = 0; i < cart.length; i++) {
        tongTien += cart[i].price * cart[i].quantity;
      }
      console.log(`Tong tien thanh toan: ${tongTien}`);
      break;
    case 5:
      console.log("Ket thuc chuong trinh.");
      break;
    default:
      console.log("Lua chon khong hop le.");
  }
}