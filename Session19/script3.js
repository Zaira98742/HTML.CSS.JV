const choose=Number(prompt("moi ban nhap lua chon 1: doi vnd -> usd hoac 2: doi usd -> vnd"));
switch (choose) {
  case 1:
    let moneyVND=Number(prompt("nhap so tien ban muon doi"));
    switchMoneyUSD=moneyVND/23;
    document.write(switchMoneyUSD+"USD");
    break;
  case 2:
    let moneyUSD=Number(prompt("nhap so tien ban muon doi"));
    switchMoneyVND=moneyUSD*23;
    document.write(switchMoneyVND+"VND");
  default:
}
