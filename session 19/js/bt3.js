// Khi click vào nút “Hide text”, dòng chữ bên trên sẽ được ẩn đi
// Khi click vào nút “Show text”, dòng chữ bên trên sẽ được hiện ra

// let hide = document.getElementById('hide');
// let show = document.getElementById('show');
// let txt = document.getElementById('text');
// hide.onclick = function () {
//     txt.style.display = 'none';
// }
// show.onclick = function () {
//     txt.style.display = 'block';
// }


// Bài 2:
// Khi click vào nút Open Modal,
// một hộp chứa dòng text “Some text in the Modal” sẽ được hiển thị ra và
// màn hình xung quanh phải tối đi

// Khi click vào nút “x” hoặc màn hình tối xung quanh,
// Modal ở trên phải ẩn đi

// let show = document.getElementById('show');
// let hide = document.getElementById('hide');
// let box2 = document.getElementById('box2');
// let box1 = document.getElementById('box1')

// hide.addEventListener('click', () => {
//     box2.style.display = 'none'
//     box1.style.background = 'none'
// })

// show.addEventListener('click', () => {
//     box2.style.display = 'block'
//     box1.style.background = 'gray'
// })


// Bài 3:Khi hơ chuột đi qua ô vuông nào,
// background phải đổi màu sắc theo ô vuông đó

// let yellow = document.querySelector('#yellow')
// let green = document.querySelector('#green')
// let gray = document.querySelector('#gray')

// let box = document.querySelector('#box')

// yellow.addEventListener('mouseover', function () {
//     box.style.background = 'yellow';
// })

// yellow.addEventListener('mouseout', function () {
//     box.style.background = 'lightskyblue'
// })

// green.addEventListener('mouseover', function () {
//     box.style.background = 'greenyellow';
// })

// green.addEventListener('mouseout', function () {
//     box.style.background = 'lightskyblue'
// })

// gray.addEventListener('mouseover', function () {
//     box.style.background = 'lightgray';
// })

// gray.addEventListener('mouseout', function () {
//     box.style.background = 'lightskyblue'
// })



// Bài 4:
// Khi hơ chuột đi qua dòng text “Hover over me”,
// một Tooltip sẽ được hiện ra

// Khi hơ chuột ra ngoài dòng text “Hover over me”,
// Tooltip sẽ biến mất

// let span = document.getElementById('span')
// let box2 = document.getElementById('box2')


// span.addEventListener('mouseover', () => {
//     box2.style.display = 'block'
// })

// span.addEventListener('mouseout', () => {
//     box2.style.display = 'none'
// })

// Bài 5:
// Khi click vào button “Toggle dark mode”,
// toàn bộ giao diện sẽ được đổi sang chế độ tối(background, text)

// Khi click vào button “Toggle dark mode”,
// một lần nữa, giao diện tối sẽ bị tắt đi
// và quay trở lại bình thường
let button = document.getElementById('button');
let box = document.getElementById('box');

button.addEventListener('click', () => {
    box.style.background = 'black';
    box.style.color = 'white'
});

button.addEventListener('dblclick', () => {
    box.style.background = 'white';
    box.style.color = 'black'
})