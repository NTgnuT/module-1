// truy cập 1 phần tử của DOM bằng JS
// truy cập qua ID
let table = document.getElementById('table')
console.log([table]);

// truy cập thông qua class
let tds = document.getElementsByClassName('td')
console.log(tds);

// truy cập thông qua tên thẻ 
let trs = document.getElementsByTagName('tr')
console.log(trs);

//sử dụng bộ chọn css
let td = document.querySelector('td.td')//td sau là tên class
console.log(td);
let tdd = document.querySelectorAll('td.tag')
console.log(tdd);

let tdAll = document.querySelectorAll('td.td')//td sau là tên class
console.log(tdAll);

// di chuyển vị trí phần tử
// di chuyển về node cha (parent)
let p = document.querySelector('.box > p')
console.log(p.nextElementSibling);// lấy phần tử tiếp theo sau thẻ p
let box = p.parentNode;// truy xuất thẻ box thông qua thẻ con p
console.log(box);

// cách viết gọn
let box2 = document.querySelector('.box>h2').parentNode;
console.log(box2);

// lấy phần tử đầu tiên trong mảng 
console.log(document.querySelector('tbody tr').firstElementChild);

// sự kiện với chuột
let box3 = document.querySelector('.box');
console.log(box3);
box3.addEventListener('mousedown', function () {
    // alert('Bạn vừa mouseDown vào thẻ Div')
})

//sự kiện với bàn phím
window.addEventListener('keyup', function (e) {
    // console.log('Bạn vừa ấn phím ' + e.key);
})

//sự kiện với con lăn
window.addEventListener('scroll', function (e) {
    // console.log('Bạn vừa cuộn trang');
})