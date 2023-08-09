let product = [
    { id: 1, name: 'Sản phẩm 1', unitPrice: 50.000, count: 2, price: 100.000, img: '13.4.webp' },
    { id: 2, name: 'Sản phẩm 2', unitPrice: 60.000, count: 1, price: 60.000, img: '13.4.webp' },
    { id: 3, name: 'Sản phẩm 3', unitPrice: 70.000, count: 3, price: 210.000, img: '13.4.webp' }
]




function listProduct() {
    let string = '';
    for (i = 0; i < product.length; i++) {
        let element = product[i];
        string = string + `<tr>
                <td>${i + 1}</td>
                <td>${element.name}</td>
                <td>${element.unitPrice}</td>
                <td>${element.count}</td>
                <td>${element.unitPrice * element.count}</td>
                <td><img src="./anh/${element.img}" alt=""></td>
                <td>
                    <button class="btn_sua" onclick='toggleFormEdit(${element.id})'>
                        <i class="fa-regular fa-pen-to-square"></i>
                        Edit
                    </button>
                    <button class="btn_xoa" onclick='deleteProduct()'>
                        <i class="fa-regular fa-trash-can"></i>
                        Delete
                    </button>
                </td>
            </tr>`
    }
    document.getElementById('table_body').innerHTML = string;
}

listProduct();

//lấy id tự động
function letNewId() {
    let idMax = 0;
    for (i = 0; i < product.length; i++) {
        if (idMax < product[i]) {
            idMax = product[i]
        }
    }
    return idMax++;
}
//ẩn hiện form thêm mới 
function toggleForm() {
    document.getElementById('form_scope').classList.toggle('hide')
}
// tạo product mới
function newProduct() {
    let newId = letNewId();
    let newName = document.getElementById('name').value;
    let newUnitPrice = document.getElementById('unit_price').value;
    let newCount = document.getElementById('count').value;
    let newPrice = newUnitPrice * newCount;
    let newImg = document.getElementById('img')
    let img = newImg.value
    img = img.split("\\")
    img = img[img.length - 1] //thêm ảnh vào html
    let newProduct = {
        id: newId,
        name: newName,
        unitPrice: newUnitPrice,
        count: newCount,
        price: newPrice,
        img,
    }
    product.push(newProduct);
    document.getElementById('name').value = '';
    document.getElementById('unit_price').value = '';
    document.getElementById('count').value = '';
    document.getElementById('img').value = '';
    listProduct();
}

//ẩn hiện form sửa dữ liệu
function toggleFormEdit(id) {
    document.getElementById('form_edit').classList.toggle('hide2')
    // lấy ra id 
    let findIdEdit = product.findIndex((cat) => cat.id == id)
    // lấy đối tượng cần sửa
    let productEdit = product[findIdEdit];
    // đổ dũ liệu của đối tượng cần sửa ra form
    document.getElementById('productId').value = productEdit.id;
    document.getElementById('name_edit').value = productEdit.name;
    document.getElementById('unit_price_edit').value = productEdit.price;
    document.getElementById('count_edit').value = productEdit.count;
}


//Chức năng sửa (Update)
// phần 1 : lấy toàn bộ thông tin của danh mục cần sửa 


// phần 2  : cập nhật lại thong tin sau khi chỉnh sửa
function updateProduct() {
    // lấy được nội dung ô input 
    let updateId = document.getElementById('productId').value
    let updateName = document.getElementById('name_edit').value;
    let updateUnitPrice = document.getElementById('unit_price_edit').value;
    let updateCount = document.getElementById('count_edit').value;

    //  lấy ra vị trí cần sửa
    let updateIndex = product.findIndex((cat) => cat.id == updateId);

    // tiến hành sửa
    product[updateIndex] = {

        id: updateId,
        name: updateName,
        unitPrice: updateUnitPrice,
        count: updateCount,
        price: updateUnitPrice * updateCount,
        img: product[updateIndex].img
    }
    // cập nhật lại giao diện
    listProduct();
}


//xóa phần tử
function deleteProduct(idDelete) {
    if (confirm('bạn có chắc chắn muốn xóa?')) {
        let indexDelete = product.findIndex((value) => { value.id == idDelete })
        product.splice(indexDelete, 1)
        listProduct();
    }
}
