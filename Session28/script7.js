let students = [
  { name: "Tran Tri Duong", scores: { math: 9, english: 8, literature: 7 } },
  { name: "Ha Bich Ngoc", scores: { math: 3, english: 2, literature: 5 } },
  { name: "Bui Thai Son", scores: { math: 9.5, english: 9, literature: 9 } }
];
function locSinhVienDiemCao(danhSachSinhVien) {
  let ketQua = [];
  for (let i = 0; i < danhSachSinhVien.length; i++) {
    let sinhVien = danhSachSinhVien[i];
    let diemToan = sinhVien.scores.math;
    let diemAnh = sinhVien.scores.english;
    let diemVan = sinhVien.scores.literature;
    let diemTrungBinh = (diemToan + diemAnh + diemVan) / 3;
    if (diemTrungBinh >= 8) {
      ketQua.push(sinhVien);
    }
  }
  return ketQua;
}
let sinhVienDiemCao = locSinhVienDiemCao(students);
console.log(sinhVienDiemCao);