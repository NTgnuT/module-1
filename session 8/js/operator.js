// cách khai báo biến thông qua 3 cách var, let, const
var x = 5;
console.log(x);

let y = 4;
console.log(y);

// block-khối lệnh-phạm vi của biến {...}
function print () {
    var x = 6;
    var x = 8;
    let y = 6;
        y = 10;
}

const PI = 3.14;
console.log(PI);

// var: - biến toàn cục, khai báo 1 nơi dùng mọi lúc
//      - cho phép khai báo lại, biến mới đè lên biến cũ 
// let: - biến cục bộ
//      - không cho phép khai báo lại, chỉ cho phép gán lại
// const - khai bao biến không thay đổi được.

// thêm ký tự trong 1 chuỗi
    //  var name = 'Nguyễn"'
    //  var name = "Nguyễn" +'"' 
    //  var name = 'Nguyễn/"'


// cách nối chuỗi
    let str1 = "Nguyễn";
    let str2 = "Tùng";
    let number = 10;
    // cách 1 dấu +
    console.log(str1+ ' ' +str2 + number);
    // cách 2 sử dụng hàm concat
    console.log(str1.concat(" ",str2,number));
    // cách 3 sử dụng cú pháp mới của ES6
    let string = "Chào bạn, tôi tên là ,năm nay tôi 20 tuổi"

    console.log(`Chào bạn, tôi tên là ${str1} ${str2} ,năm nay tôi ${number} tuổi`)