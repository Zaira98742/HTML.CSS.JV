let number=+prompt("nhap mot so");
if(Number.isInteger(number)&&number>0){
for(let i=1;i<number;i++){
  if(number%i==0){
    console.log(i);
  }
}  
}else{
  console.log("khong hop le");
}
