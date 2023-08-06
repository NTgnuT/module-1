let items = [
    'Backpack',
    'MiBand watch',
    'Ring'
];

let list = document.getElementById('list');
for (let i = 0; i < items.length; i++) {
    list.insertAdjacentHTML('beforeend', `<li>${items[i]} <button onclick='xoa(${i})'>Xóa</button></li>`)
}

//xóa item test
list.children[0].remove;
list.children[1].remove;

//Lấy ra thẻ ‘New item’ input và thẻ ‘Add’ button
let text = document.getElementById('input_text')
let button = document.getElementById('add')

console.log(text);
console.log(button);

//Bắt sự kiện click của ‘Add‘ button
button.addEventListener('click', function () {
    items.push(text.value);
    list.insertAdjacentHTML('beforeend', `<li>${items[items.length - 1]} <button onclick='xoa(${items.length - 1})'>Xóa</button></li>`)
    text.value = ''
})

function xoa(vitri) {
    items.splice(vitri, 1)//xóa trong mảng item
    list.innerHTML = '';
    //vẽ lại ul;
    for (let i = 0; i < items.length; i++) {
        list.insertAdjacentHTML('beforeend', `<li>${items[i]} <button onclick='xoa(${i})'>Xóa</button></li>`)
    }
    console.log(items);
}