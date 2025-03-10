let chuoi = "";
let luaChon;

while (luaChon !== 7) {
  luaChon = parseInt(prompt("Chon thao tac:\n1. Nhap chuoi\n2. Hien thi chuoi\n3. Tinh do dai chuoi\n4. Dem ky tu\n5. Kiem tra doi xung\n6. Chuyen chu in hoa\n7. Thoat"));

  switch (luaChon) {
    case 1:
      chuoi = prompt("Nhap chuoi:");
      break;
    case 2:
      console.log("Chuoi:", chuoi);
      break;
    case 3:
      console.log("Do dai chuoi:", chuoi.length);
      break;
    case 4:
      let kyTuDem = prompt("Nhap ky tu can dem:");
      let dem = 0;
      for (let i = 0; i < chuoi.length; i++) {
        if (chuoi[i] === kyTuDem) {
          dem++;
        }
      }
      console.log(`Ky tu '${kyTuDem}' xuat hien ${dem} lan`);
      break;
    case 5:
      let doiXung = true;
      for (let i = 0; i < Math.floor(chuoi.length / 2); i++) {
        if (chuoi[i] !== chuoi[chuoi.length - 1 - i]) {
          doiXung = false;
          break;
        }
      }
      console.log("Chuoi co doi xung khong:", doiXung);
      break;
    case 6:
      let chuoiInHoa = "";
      let dauTu = true;
      for (let i = 0; i < chuoi.length; i++) {
        if (chuoi[i] === " ") {
          chuoiInHoa += chuoi[i];
          dauTu = true;
        } else {
          if (dauTu) {
            chuoiInHoa += chuoi[i].toUpperCase();
            dauTu = false;
          } else {
            chuoiInHoa += chuoi[i];
          }
        }
      }
      console.log("Chuoi in hoa:", chuoiInHoa);
      break;
    case 7:
      console.log("Ket thuc chuong trinh");
      break;
    default:
      console.log("Lua chon khong hop le");
  }
}