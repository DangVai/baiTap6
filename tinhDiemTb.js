
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("ok").addEventListener("click", tinhTb);
    document.getElementById("cancel").addEventListener("click", myFunction2);
});

function tinhTb() {
    var a = parseInt(document.getElementById("diem1").value);
    var b = parseInt(document.getElementById("diem2").value);
    var c = document.getElementById("year");
    var value = parseInt(c.options[c.selectedIndex].value);
    var k;

    switch (value) {
        case 1:
            k = (a + (b * 2)) / 3;
            break;
        case 2:
            k = ((a * 2) + (b * 3)) / 5;
            break;
        case 3:
            k = ((a * 2) + (b * 3)) / 7;
            break;
        default:
            k = 0;
    }

    // Hiển thị điểm trung bình
    document.getElementById("diemTbInput").value = k; // hiển thị số thập phân với 2 chữ số

    var resultElement = document.getElementById("kq");
    if (k >= 9) {
        resultElement.innerHTML = "Xuất sắc";
        resultElement.style.color = "red";
    } else if (k >= 7 && k < 9) {
        resultElement.innerHTML = "Giỏi";
        resultElement.style.color = "blue";
    } else if (k >= 5 && k < 7) {
        resultElement.innerHTML = "Khá";
        resultElement.style.color = "green";
    } else {
        resultElement.innerHTML = "Không đạt";
        resultElement.style.color = "black";
    }
}

function myFunction2() {
    document.getElementById("diem1").value = "";
    document.getElementById("diem2").value = "";
    document.getElementById("diemTbInput").value = "";
    document.getElementById("kq").innerHTML = "";
}