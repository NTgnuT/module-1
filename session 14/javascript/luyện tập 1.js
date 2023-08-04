/* Bài 1: Viết chương trình khởi tạo nhập vào một mảng số nguyên
gồm 10 phần tử. Chương trình thực hiện tính và hiển thị xem
có bao nhiêu số nguyên lớn hơn hoặc bằng 10. */

// let number = 10;
// let arr = [];
// for (i = 0; i < number; i++) {
//     let n = Number(prompt(`Nhập phần tử thứ ${i + 1} của mảng 10 phần tử`))
//     arr.push(n);
// }
// let count = 0;
// let count2 = 0;
// for (j = 0; j < arr.length; j++) {
//     if (arr[j] > 10) {
//         count++;
//     } else if (arr[j] == 10) {
//         count2++;
//     }
// }
// console.log(arr);
// console.log(`có ${count} số > 10`);
// console.log(`có ${count2} số = 10`);


// Bài 2: Viết chương trình khởi tạo nhập vào một mảng số nguyên
// gồm 10 phần tử khác nhau.Chương trình hiển thị ra được phần tử
// có giá trị lớn nhất trong mảng và vị trí của phần tử đó.

// let number = 10;
// let arr = [];
// for (i = 0; i < number; i++) {
//     let n = Number(prompt(`Nhập phần tử thứ ${i + 1} của mảng 10 phần tử`))
//     arr.push(n);
// }
// let max = arr[0];
// for (j = 0; j < arr.length; j++) {
//     if (max < arr[j]) {
//         max = arr[j];
//     }
// }
// console.log(arr);
// console.log(`Phần tử có giá trị lớn nhất trong mảng là ${max}, nằm ở vị trí ${j}`);


// Bài 3: Viết chương trình khởi tạo nhập vào một mảng số nguyên.
// Hiển hiện giá trị lớn nhất trong mảng đó và giá trị trung bình
// của các phần tử trong mảng.

// let number = Number(prompt('Nhập vào số lượng biến mà bạn muốn kiểm tra'))
// let arr = [];
// for (i = 0; i < number; i++) {
//     let n = Number(prompt(`Nhập phần tử thứ ${i + 1} của mảng ${number} phần tử`))
//     arr.push(n);
// }
// let max = arr[0];
// let sum = 0;
// for (j = 0; j < arr.length; j++) {
//     if (max < arr[j]) {
//         max = arr[j];
//     }
//     sum += arr[j];
// }
// let tb = sum / arr.length;

// console.log(arr);
// console.log(`Giá trị lớn nhất trong mảng ${max}`);
// console.log(`Giá trị trung bình các phần tử trong mảng ${tb}`);


// Bài 4: Viết chương trình khởi tạo nhập vào một mảng số nguyên
// và đảo ngược các phần tử trong mảng đó.

// let number = Number(prompt('Nhập vào 1 số lượng biến bạn muốn kiểm tra'))
// let sum = [];

// for (i = 0; i < number; i++) {
//     let ptu = Number(prompt(`Nhập phần tử muốn kiểm tra`))
//     sum.push(ptu);
// }

// let ketqua = '';
// for (j = sum.length - 1; j >= 0; j--) {
//     ketqua += sum[j];
// }

// console.log(ketqua);


/* Bài 5: Viết chương trình đếm số nguyên âm trong một chuỗi.

let number=Number(prompt('Nhập vào 1 số lượng biến bạn muốn kiểm tra'))
let sum=[];

for (i=0; i < number; i++) {
    let ptu=Number(prompt(`Nhập phần tử muốn kiểm tra`))
    sum.push(ptu);
}

console.log(sum);
let count=0;

for (j=0; j < sum.length; j++) {
    if (sum[j] < 0) {
        count++;
    }
}

console.log(count);
*/

// Bài 6: Viết chương trình khởi tạo nhập vào một mảng số nguyên
// gồm 10 phần tử.Nhập phần tử số nguyên và tìm xem số đó
// có nằm trong mảng số nguyên không ?
// Nếu có thuộc mảng số nguyên thì in ra "Number X is in the array"
// còn lại in ra "Number X is not in the array".

let n = 10;



// Bài 7: Viết chương trình khởi tạo nhập vào một mảng số nguyên
// gồm 10 phần tử.Nhập phần tử số nguyên và kiểm tra xem số đó
// có thuộc mảng đã cho không ?
// Nếu có thuộc mảng đã cho xoá số đó khỏi mảng.

// let a = 10;
// let arr = [];
// let arrDelete = [];
// for (i = 0; i < a; i++) {
//     let n = +prompt(`Nhập phần tử thứ ${i + 1} của mảng 10 phần tử`);
//     arr.push(n);
// }

// let num = +prompt('Nhập 1 số nguyên để kiểm tra');
// let check = false; // giá trị không tồn tại
// for (let i = 0; i <= arr.length; i++) {
//     if (arr[i] == num) {
//         //co ton tai
//         check = true;
//     } else {
//         arrDelete.push(arr[i]);
//     }
// }
// if (check) {
//     //thuc hien xoa
//     arr = arrDelete;
// } else {
//     //thong bao khong co
//     alert("Gia tri nguoi dung nhap vao ${num} khong ton tai trong bang")
// }
// //hien thi mang
// console.log(arr);


// Bài 8: Viết chương trình khởi tạo nhập vào một mảng số nguyên
// gồm 10 phần tử.Chương trình sắp xếp mảng theo thứ tự giảm dần
// và hiển thị ra mảng đã được sắp xếp.

