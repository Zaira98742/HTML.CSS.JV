let day1 = prompt("ngay thu nhat:");
let day1A= new Date(day1);
console.log(day1A);
let day2 = prompt("ngay thu nhat:");
let day2B= new Date(day2);
console.log(day2B);
let days = Math.abs(day1A-day2B) / (1000*60*60*24);
let dayscount = days.toFixed(0)
console.log("Do lech la: "+days+" ngay");