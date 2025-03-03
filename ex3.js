let a = Number(prompt("mời bạn nhập vào số :\n1.tiền bạn muốn đổi từ VND sang USD \n2.đổi từ USD sang VND:"));

if (a == 1) {
    let d = Number(prompt("moi ban nhap so tien ban muon chuyen tu VND sang USD: "));
    let b = d / 23000;
    alert(b.toFixed(2)+"$");
} else if (a == 2) {
    let e = Number(prompt("moi ban nhap vao so tien ban muon chuyen tu USD sang VND:"));
    let c = e * 23000;
    alert(c+"VND")
}
