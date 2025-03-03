let a=Number(prompt("nhap gia tri a: "));
let b=Number(prompt("nhap gia tri b: "));
let c=Number(prompt("nhap gia tri c: "));
let delta=(b*b)-4*(a*c);
if (delta<0) {
  alert("phuong trinh vo nghiem");  
}else if(delta==0){
  let x1=-(b/(2*a));
  let x2=x1;
  document.write("phuong trinh co nghiem kep x1=x2=" + x1);
}else if(delta>0){
  let x1=(-b+Math.sqrt(delta))/(2*a);
  let x2=(-b-Math.sqrt(delta))/(2*a);
  document.write("phuong trinh co 2 nghiem phan biet x1="+x1 +" va x2="+ x2);
}