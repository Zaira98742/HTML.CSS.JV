const cart = [
  { name: "Men men", price: 30000, quantity: 2 },
  { name: "Mi tom", price: 5000, quantity: 1 },
  { name: "Banh bao", price: 15000, quantity: 3 }
];
function tinhTongTien(gioHang) {
  let tongTien = 0;
  for (let i = 0; i < gioHang.length; i++) {
    let sanPham = gioHang[i];
    tongTien = tongTien + sanPham.price * sanPham.quantity;
  }
  return tongTien;
}
let tongTienGioHang = tinhTongTien(cart);
console.log("Tong tien trong gio hang: " + tongTienGioHang);