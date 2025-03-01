let numberA = Number(2);
let numberB = Number(4);
let numberC = Number(2);
let deltal=Math.pow(numberB,2)-(4*(numberA*numberC));
let x1 = (Math.sqrt(deltal)-numberB)/(2*numberA);
let x2 = (-Math.sqrt(deltal)-numberB)/(2*numberA);
console.log("X1= :"+x1 );
console.log("X2= :"+x2 );