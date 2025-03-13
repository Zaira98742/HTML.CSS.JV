function timSoLonNhatTuCacChuSo(so) {
  if (typeof so !== 'number') {
    return "dữ liệu không hợp lệ";
  }
  let chuoiSo = String(so);
  let mangChuSo = chuoiSo.split('');
  if (mangChuSo.some(isNaN)) {
    return "dữ liệu không hợp lệ";
  }
  mangChuSo.sort((a, b) => b - a);
  let soLonNhat = parseInt(mangChuSo.join(''));
  return soLonNhat;
}
console.log(timSoLonNhatTuCacChuSo(2941));
console.log(timSoLonNhatTuCacChuSo(3875));
console.log(timSoLonNhatTuCacChuSo("1h8t"));