let gio = document.getElementById('gio');
let phut = document.getElementById('phut');
let giay = document.getElementById('giay');

let time;
setInterval(() => {
    time = new Date()
    gio.innerHTML = time.getHours();
    phut.innerHTML = time.getMinutes();
    giay.innerHTML = time.getSeconds();
}, 1000);
