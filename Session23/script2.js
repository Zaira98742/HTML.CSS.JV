let array=[];
for (let i = 0; i < 10; i++) {
    array[i] = +prompt("Moi ban nhap phan tu " + (i + 1) + " vao trong mang");
}
let count=0;
let max = array[0];
let maxIndex = 0;
for (let i = 1; i < 10; i++) {
    if (array[i] > max) {
        max = array[i];
        maxIndex = i;
        count=1;
    }
}
if(array.length === 0){
   count = 0;
}
count ==1? document.write("Phan tu lon nhat trong mang la " + max + " o vi tri " + (maxIndex + 1)): document.write("Khong co phan tu lon nhat trong mang");