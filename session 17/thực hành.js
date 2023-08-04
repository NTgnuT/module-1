// // Thực hành 1: Xây dựng lớp date
// class MyDate {
//     constructor(day, month, year) {
//         this.day = day;
//         this.month = month;
//         this.year = year;
//         this.getDay = () => {
//             return this.day;
//         }
//         this.getMonth = () => {
//             return this.month;
//         }
//         this.getYear = () => {
//             return this.year;
//         }
//         this.setDay = (day) => {
//             this.day = day;
//         }
//         this.setMonth = (month) => {
//             this.month = month;
//         }
//         this.setYear = (year) => {
//             this.year = year;
//         }
//     }
// }

// let date = new MyDate(3, 2, 2007);
// let day = date.getDay(); // 2
// let month = date.getMonth(); // 2
// let year = date.getYear(); // 2007
// alert(day + '/' + month + '/' + year);

// date.setDay(10);
// date.setMonth(10);
// date.setYear(2019);

// day = date.getDay()

// alert(day + "/" + date.month + "/" + date.year);


// Thực hành 2: xây dựng lớp hình tròn
// class Circle {
//     constructor(radius, color) {
//         this.radius = radius;
//         this.color = color;
//         this.area = radius ** 2 * Math.PI;
//         this.getArea = () => {
//             console.log(this.area);
//         }
//     }
// }

// let Circle1 = new Circle(2, 'red')
// Circle1.getArea();


//Thực hành 4: mô phỏng quá trình mèo bắt chuột
// class Mouse {
//     constructor(speed, weight) {
//         this.speed = speed;
//         this.weight = weight;
//         this.alive = true;
//     }
// }

// class Cat {
//     constructor(speed, weight, name) {
//         this.speed = speed;
//         this.weight = weight;
//         this.name = name;
//         this.meow = () => {
//             console.log(this.name + ' meow meow');
//         }
//         this.catchMouse = (mouse) => {
//             if (this.speed > mouse.speed) {
//                 console.log(this.name + ' bắt chuột');
//                 mouse.alive = false;
//             } else {
//                 console.log(this.name + ' không bắt được chuột');
//             }
//         }

//         this.eatMouse = (mouse) => {
//             if (mouse.alive) {
//                 console.log(this.name + ' không ăn được chuột');

//             } else {
//                 console.log(this.name + ' đã ăn được chuột');
//                 this.weight += mouse.weight;
//             }
//         }

//     }
// }

// let cat = new Cat(10, 20, 'Tom');
// let mouse = new Mouse(1, 10);

// cat.meow();

// cat.catchMouse(mouse);
// cat.eatMouse(mouse);
// console.log(`${cat.name} weight: ${cat.weight}`);


//Thực hành 5: quản lý thông tin nhân viên.
class Staff {
    constructor(id, name, age, salary)
}