let categories = [
    {
        id: 1,
        name: 'Hit the gym'
    },
    {
        id: 2,
        name: 'Paybills'
    },
    {
        id: 3,
        name: 'Meet George'
    },
    {
        id: 4,
        name: 'Buy eggs'
    },
    {
        id: 5,
        name: 'Read a book'
    },
    {
        id: 6,
        name: 'Organnize office'
    },
]

function showListCategories() {
    let string = '';
    for (i = 0; i < categories.length; i++) {
        let element = categories[i];
        string = string + `<tr>
                    <td>${i + 1}</td>
                    <td>${element.name}</td>
                    <td>
                        <button type="button" id="edit" onclick="addCategory(${element.id})">Edit</button>
                    </td>
                    <td>
                        <button type="button" id="delete" onclick="deleteCategory(${element.id})">Delete</button>
                    </td>
                </tr>`
    }
    document.getElementById('categories').innerHTML = string;
}

showListCategories(); // gọi hàm

// id tự tăng
function getNewId() {
    let idMax = 0;
    for (i = 0; i < categories.length; i++) {
        if (idMax < categories[i].id) {
            idMax = categories[i].id
        }
    }
    return idMax++;
}

// chức năng thêm mới 
function addNewCategory() {
    let newName = document.getElementById('title').value;
    let newId = getNewId();
    let newCategory = {
        id: newId,
        name: newName,
    }

    categories.push(newCategory);
    // xóa dữ liệu trong ô sau khi nhập vào
    document.getElementById('title').value = '';
    // cập nhật lại giao diện
    showListCategories();
}

//chức năng xóa 
function deleteCategory(idDelete) {
    if (confirm('Bạn có chắc muốn xóa không?')) {
        // tìm vị trí phần tử muốn xóa
        let indexDelete = categories.findIndex((category) => { category.id == idDelete });
        // xóa phần tử bằng splice
        categories.splice(indexDelete, 1)
        showListCategories();
    }
}

//chức năng sửa

