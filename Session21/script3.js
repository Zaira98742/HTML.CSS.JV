let pass="admin";
for(let i=0;i<3;i++){
  let inputPass=prompt("moi ban nhap mat khkau");
  if(pass==inputPass){
    document.write("mat khau hop le");
    break;
  }else{
    console.log("mat khau ko hop le");
  }
}