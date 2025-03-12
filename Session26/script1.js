let test1 = [12, 3, 4323, 232, 4, 2232, 2];
let test2 = [];
let test3 = "abcxyz";
function bai1(arr) {
    if (Array.isArray(arr)) {
        if (arr.length === 0) { 
            console.log
            ("mang khong co pt");
        } else {
            let result = arr.filter((item) => item >= 10);
            console.log("so >= 10:", result);
        }
    } else {
        console.log("khong hop le");
    }
}
bai1(test1);
bai1(test2);
bai1(test3);