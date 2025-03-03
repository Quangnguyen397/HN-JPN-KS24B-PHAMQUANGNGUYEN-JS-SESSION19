let a = Number(prompt("moi ban nhap vao so a:"));
let b = Number(prompt("moi ban nhap vao so b:"));
let c = Number(prompt("moi ban nhap vao so c:"));
let max = (a > b) ? ((a > c) ? a : c) : ((b > c) ? b : c);
alert("so lon nhat trong 3 so la: " + max);