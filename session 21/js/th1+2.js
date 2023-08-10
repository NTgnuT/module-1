let boxAdd = document.getElementById('box_add');
let btnAdd = document.getElementById('btn_add');
let btnDelete = document.getElementById('btn_delete');
let list = document.getElementById('list');

btnAdd.addEventListener('click', function () {
    // thêm phần tử vào bộ nhớ trình duyệt
    localStorage.setItem(boxAdd.value, boxAdd.value)

    // khởi tạo phần tử li
    let liPlayer = document.createElement('li');
    let liText = document.createTextNode(boxAdd.value);
    liPlayer.appendChild(liText);
    //-------------------------------------//
    //Thêm nút xóa cạnh tên cầu thủ 
    let button = document.createElement('button')
    button.innerText = 'Xóa';
    liPlayer.appendChild(button);



    //thêm phần tử vào danh sách đã có 
    list.appendChild(liPlayer)

    //làm rỗng ô input sau khi thêm thành công
    boxAdd.value = '';
})


//Lấy danh sách cầu thủ 
function getAllPlayer() {
    // duyệt qua danh sách cầu thủ lưu trữ tại local storage
    for (let i = 0; i < localStorage.length; i++) {
        //tạo phần tử li
        let liPlayer = document.createElement('li');
        let liText = document.createTextNode(localStorage.key(i))
        liPlayer.appendChild(liText)

        // thêm vào danh sách đã có 
        list.appendChild(liPlayer);
    }
}
getAllPlayer()

// xóa tất cả danh sách
btnDelete.addEventListener('click', function () {
    localStorage.clear();
    list.innerHTML = '';
})