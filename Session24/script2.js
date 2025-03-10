let mang = [];
let luaChon;
while (luaChon !== 7) {
  luaChon = parseInt(prompt("Chon thao tac:\n1. Nhap mang\n2. Hien thi mang\n3. Tim cac phan tu chan va le\n4. Tinh trung binh cong\n5. Xoa phan tu\n6. Tim so lon thu hai\n7. Thoat"));

  switch (luaChon) {
    case 1:
      mang = prompt("Nhap mang (cac so cach nhau boi dau phay):").split(",").map(Number);
      break;
    case 2:
      console.log("Mang:", mang);
      break;
    case 3:
      let chan = [];
      let le = [];
      for (let i = 0; i < mang.length; i++) {
        if (mang[i] % 2 === 0) {
          chan.push(mang[i]);
        } else {
          le.push(mang[i]);
        }
      }
      console.log("Chan:", chan);
      console.log("Le:", le);
      break;
    case 4:
      if (mang.length === 0) {
        console.log("Mang rong");
      } else {
        let tong = 0;
        for (let i = 0; i < mang.length; i++) {
          tong += mang[i];
        }
        console.log("Trung binh cong:", tong / mang.length);
      }
      break;
    case 5:
      let viTriXoa = parseInt(prompt("Nhap vi tri can xoa:"));
      if (viTriXoa >= 0 && viTriXoa < mang.length) {
        for (let i = viTriXoa; i < mang.length - 1; i++) {
          mang[i] = mang[i + 1];
        }
        mang.pop();
        console.log("Mang sau khi xoa:", mang);
      } else {
        console.log("Vi tri khong hop le");
      }
      break;
    case 6:
      if (mang.length < 2) {
        console.log("Mang khong du phan tu");
      } else {
        let lonNhat = mang[0];
        let lonThuHai = mang[1];
        if (lonNhat < lonThuHai) {
          let temp = lonNhat;
          lonNhat = lonThuHai;
          lonThuHai = temp;
        }
        for (let i = 2; i < mang.length; i++) {
          if (mang[i] > lonNhat) {
            lonThuHai = lonNhat;
            lonNhat = mang[i];
          } else if (mang[i] > lonThuHai && mang[i] !== lonNhat) {
            lonThuHai = mang[i];
          }
        }
        console.log("So lon thu hai:", lonThuHai);
      }
      break;
    case 7:
      console.log("Ket thuc chuong trinh");
      break;
    default:
      console.log("Lua chon khong hop le");
  }
}