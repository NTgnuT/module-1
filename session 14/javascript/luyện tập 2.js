// Bài 1: Viết chương trình khởi tạo mảng 2 chiều,
// gồm một bộ các phần tử có sẵn, in ra các phần tử trong mảng.

// let a = [
//     [1, 2, 1, 24],
//     [8, 11, 9, 4],
//     [7, 0, 7, 27],
//     [7, 4, 28, 14],
//     [3, 10, 26, 7]
// ];

// for (i = 0; i < a.length; i++) {
//     for (j = 0; j < a[i].length; j++) {
//         console.log(a[i][j]);
//     }
// }


// Bài 2: Viết một chương trình để in các ký tự trong một mảng
// theo thứ tự đảo ngược.Ví dụ, nếu một mảng chứa các ký tự
// ['c', 's', 'c', '2', '6', '1']sau khi
// thực hiện đảo ngược sẽ là "162csc".

// let arr = ['c', 's', 'c', '2', '6', '1'];

// Cách 1:
// let sum = ''
// for (i = arr.length - 1; i >= 0; i--) {
//     sum += arr[i];
// }
// console.log(sum);

// Cách 2:

// // console.log(arr.reverse().join(""));
// // ket qua khi: arr.reverse() : ['1', '6', '2', 'c', 's', 'c']
// // ket qua khi: .join(""): "162csc"


// Bài 3: Viết một chương trình khai báo một mảng ký tự. In ra số “ký tự số” trong mảng.

// let kyTu = ["n", "0", "g", "6", "3"];

// // cach 1
// for (i = 0; i < kyTu.length; i++) {
//     if (parseInt(kyTu[i]) === 0) {
//         console.log(kyTu[i]);
//     } else if (!parseInt(kyTu[i])) {
//         continue;
//     } else {
//         console.log(kyTu[i]);
//     }
// }

// // cach 2
// for (let i = 0; i < kyTu.length; i++) {
//     if (kyTu[i] < 0 || kyTu[i] >= 0) {
//         console.log(kyTu[i]);
//     }
// }


// Bài 4: Viết một chương trình để đếm số từ trong một chuỗi.

// c1:
// let n = prompt('Nhập vào 1 chuỗi')
// let count = 0;

// n = n.split(' ');  //n = ["", "", "", "", "nguyen", "", "", "", "van", "", "w"]
// for (let i = 0; i < n.length; i++) {
//     if (n[i] != '') {
//         count++;
//     }
// }
// console.log(count);

// c2:
// let n = prompt('Nhập vào 1 chuỗi')
// let count = 0;

// n = n.split(' ');
// for (let i = 0; i < n.length; i++) {
//     if (n[i] == ' ') {
//         count++;
//     }
// }
// console.log(count + 1);

// c3:
// let n = prompt('Nhập vào 1 chuỗi');
// let str = n.split(' ');
// console.log(str.length);


// Bài 5: Viết một chương trình nhập vào 2 chuỗi,
// sau đó kiểm tra xem hai chuỗi có giống nhau hay không.