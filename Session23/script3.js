let index = prompt("nhap so luong trong mang");
let array=[];
let count=0;
if(Number.isInteger(Number(index)) && index>0){
    for(let i = 0;i<index;i++){
        array[i]=prompt("nhap so bat ki "+(i+1));
    }
    for(let i =0;i<=index;i++){
        if(array[i]<0){
            count++;
        }
    }
    document.write("so phan tu am la "+count);
}else if(index==0){
    document.write('khong co phan tu trong mang')
}else{
    document.write('so luong phan tu ko hop le');
}