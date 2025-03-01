let mathScore = Number(prompt("Mời bạn nhập điểm Toán:"));
let liteScore = Number(prompt("Mời bạn nhập điểm Văn:"));
let englishScore = Number(prompt("Mời bạn nhập điểm Anh:"));
let average = ((mathScore + liteScore + englishScore) / 3).toFixed(2);
average = Number(average);
if (average >= 8) {
    console.log("Bạn là học sinh giỏi");
} else if (average >= 6.5 && average < 8) {
   console.log("Bạn là học sinh khá");
} else if (average >= 5.0 && average < 6.5) {
    console.log("Bạn là học sinh trung bình");
} else {
    console.log("Bạn là học sinh yếu");
}