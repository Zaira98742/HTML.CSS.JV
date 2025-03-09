let arr =[];
let count=0;
let outp=[];
for (let i = 0;i<=9;i++){
    arr[i]=prompt("nhap so tai "+(i+1));
}
for (let i = 0;i<=9;i++){
    if(Number.isInteger(Number(arr[i]))){
        if(arr[i]>=10){
            outp[count]=arr[i];
            count++;
        }
    }
}
if(count==0){
    document.write("khong co so lon hon bang 10");
}else{
    document.write(outp.join(","));
}