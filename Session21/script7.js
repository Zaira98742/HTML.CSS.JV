let money = +prompt("so tien giu (VND)");
let raise = +prompt("lai thang la (%)");
let month = +prompt("thoi gian giu (month)");
let total = money * (raise / 100) * month;
let interest = total - money;
console.log(`tien lai: ${Number(interest)} VND`);
console.log(`tien nhan duoc: ${Number(total)} VND`);