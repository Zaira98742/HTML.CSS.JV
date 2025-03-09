let array=[];
let index = prompt("nhap so luong trong mang");
let count=0;
let array2=[];
if(Number.isInteger(Number(index)) && index>0){
    for(let i = 0;i<index;i++){
        array[i]=prompt("nhap so bat ki "+(i+1));
    }
    for(let i = 0;i<index;i++){
        if(Number.isInteger(Number(array[i]))){
            array2[count]=array[i]
            count++;
        }
    }
   document.write(array2.join(","));
    }else if(index==0){
    document.write('khong co phan tu trong mang')
}else{
    document.write('so luong phan tu ko hop le');
}