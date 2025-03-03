let month=Number(prompt("moi ban nhap thang: "));
switch (month) {
  case 1:
  case 2:
  case 3:
    document.write("mua xuan");
    break;
  case 4:
  case 5:
  case 6:
    document.write("mua he");
    break;
  case 7:
  case 8:
  case 9:
    document.write("mua thu");
    break;
  case 10:
  case 11:
  case 12:
    document.write("mua dong");
    break;
  default:
   document.write("thang khong hop le");
}