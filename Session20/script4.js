let str = prompt("nhap chuoi thu nhat:");
let search = prompt("nhap chuoi thu hai: ");
let flag = 0; 
for(let i = 0; i < str.length; i++) {
    if (str[i] === search) { 
        document.write(search + " co trong chuoi");
        flag = 1;
        break;
    }
}
if (flag === 0) {
    document.write(search + " khong co trong chuoi");
}