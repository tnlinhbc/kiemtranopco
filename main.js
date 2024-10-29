function kiemTra() {
    var maSinhVien = document.frLienHe.maSinhVien.value;
    var hoTen = document.frLienHe.hoTen.value;
    var namSinh = document.frLienHe.namSinh.value;
    var gioiTinh = document.frLienHe.gioiTinh.value;
    var checkbox = document.frLienHe.soThich;
    var tinh = document.frLienHe.tinh.value;
    var noiDung = document.frLienHe.noiDung.value;
    var soThich = document.getElementById("st");
    var sThich = "";
    if (maSinhVien == '') {
        alert('Vui lòng nhập mã sinh viên');
        document.frLienHe.maSinhVien.focus();
        return false;
    }
    if (hoTen == '') {
        alert('Vui lòng nhập họ và tên');
        document.frLienHe.hoTen.focus();
        return false;
    }
    if (namSinh == '') {
        alert('Vui lòng nhập năm sinh');
        document.frLienHe.namSinh.focus();
        return false;
    }
    else
        if (namSinh > 2009) {
            alert('Phải trên 15 tuổi');
            document.frLienHe.namSinh.focus();
            return false;
        }
    if (gioiTinh == '') {
        alert('Vui lòng nhập giới tính');
        return false;
    }
    if (soThich.checked == false) {
        alert('Vui lòng chọn 1 sở thích');
        return false;
    }
    if (tinh == 'chon') {
        alert('Vui lòng chọn tỉnh bạn đang sống');
        return false;
    }
    if (noiDung == '') {
        alert('Vui lòng nhập nội dung liên hệ');
        document.frLienHe.noiDung.focus();
        return false;
    }
    alert('Gửi thông tin thành công');
    for (var i = 0; i < checkbox.length; i++) {
        if (checkbox[i].checked === true) {
            sThich += checkbox[i].value + ",";
        }
    }
    var thongTin = '<h1>THÔNG TIN</H1>' +
        '<P><b>Mã sinh viên: </b>' + maSinhVien + '</p>' +
        '<P><b>Họ và tên: </b>' + hoTen + '</p>' +
        '<P><b>Năm sinh: </b>' + namSinh + '</p>' +
        '<P><b>Giới tính: </b>' + gioiTinh + '</p>' +
        '<P><b>Sở thích: </b>' + sThich + '</p>' +
        '<P><b>Tỉnh: </b>' + tinh + '</p>' +
        '<P><b>Nội dung liên hệ: </b>' + noiDung + '</p>';
    document.getElementById('section__left--content--tTin').innerHTML = thongTin;
    var mail = "mailto:phuonglinh.tgu@gmail.com?subject= Hello " + hoTen +
        "&body=Nội dung liên hệ!" + "%0D%0AMã Sinh viên là: " + maSinhVien +
        "%0D%0AHọ tên là: " + hoTen +
        "%0D%0ANăm sinh là: " + namSinh +
        "%0D%0AGiới tính là: " + gioiTinh +
        "%0D%0ASở thích là: " + sThich +
        "%0D%0ATỉnh là: " + tinh +
        "%0D%0ANội dung là: " + noiDung +
        "%0D%0AChúc bạn vui vẻ! " + hoTen;
    window.location.href = mail;

}