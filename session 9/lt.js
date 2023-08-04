/*
let x = 4;

let ss = x % 2 == 0;
if (ss) {
    console.log('x chia hết cho 2');
} else {
    console.log('x không chia hết cho 2');
}

// tính diện tích hình tròn nếu nó > 0



// câu lệnh lồng
if (x % 3 == 0) {
    // x chia hết cho 3
    if (x % 5 == 0) {
        // vừa chia hết cho 3, vừa chia hết cho 5
    } else {
        // x chia hết cho 3 nhưng không chia hết cho 5
    }
} else {
    // không chia hết cho 3
    if (x % 5 == 0) {
        // chia hết cho 5 nhưng không chia hết cho 3
    } else {
        // vừa không chia hết cho 3 vừa ko chia hết cho 5
    }
}

// đánh giá xếp loại của học sinh dựa vào điểm trung bình 
if (dtb >= 8.0 && dtb <= 10) {
    //học sinh giỏi
} else if (đtb >= 7) {
    // học sinh khá 
} else if (dtb >= 6.5) {
    // học sinh trung bình
} else if (dtb < 6.5) {
    // học sinh yếu
}
*/

// so sánh bằng switch case
let choice = Number(prompt('nhập vào 1 số bất kỳ'));
switch (choice) {
    case 0:
        document.write('số không')
        break;
    case 1:
        document.write('số một')
        break;
    case 2:
        document.write('số hay')
        break;
    case 3:
        document.write('số ba')
        break;
    case 4:
        document.write('số bốn')
        break;
    case 5:
        document.write('số năm')
        break;
    case 6:
        document.write('số sáu')
        break;
    case 7:
        document.write('số bảy')
        break;
    case 8:
        document.write('số tám')
        break;
    case 9:
        document.write('số chín')
        break;
    default:
        document.write('Không hợp lệ');
}


// toán tử 3 ngôi
let x = 2
let rs = (x % 2 == 0) ? ('chia hết cho 2') : ('không chia hết cho 2');
console.log(rs)

// kiểm tra năm nhuận
let year = Number(prompt('Nhập vào số năm cần kiểm tra'));
