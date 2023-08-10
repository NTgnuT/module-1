let data = { id: 1, name: 'Nguyễn Văn A' };
// không ép kiểu json
// dùng kiểu dữ liệu object và array thì phải ép kiểu
localStorage.setItem('data', JSON.stringify(data));
localStorage.setItem('string', 'Hello world');
localStorage.setItem('number', 2);
localStorage.setItem('boolean', true);
localStorage.setItem('char', 'c');
// lấy dữ liệu về
let dataGetLocal = JSON.parse(localStorage.getItem('data'))
console.log(dataGetLocal);

let array = [1, 2, 3, 4, 5]
localStorage.setItem('arr', JSON.stringify(array));
let getArrayLocal = JSON.parse(localStorage.getItem('arr'))
console.log(getArrayLocal);

//session storage: tắt trình duyệt sẽ không lưu trữ nữa 
sessionStorage.setItem('data', JSON.stringify(data))

//xóa 1 phần tử theo key
// localStorage.removeItem('arr');
// localStorage.removeItem('boolean');

//xóa tất cả
// localStorage.clear();

// cookies:
document.cookie = 'username:tungnt'

//lấy ra cookies:
let cookie = document.cookie;
console.log(cookie);
let arrayCookie = cookie.split('; ');
console.log(arrayCookie);
let findIndex = arrayCookie.findIndex((value) => value.startsWith('username='));
console.log(arrayCookie[findIndex].split('=')[1]);