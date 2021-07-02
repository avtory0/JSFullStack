// //classlist можно узнать классы и кол-во у эл-тов

// const btns = document.querySelectorAll('button'),
//         wrapper = document.querySelector('.btn-block');


// console.log(btns[0].classList.item(0));
// //classList.item() - позовляет получить класс под опред. индексом

// console.log(btns[1].classList.add('red'));
// // console.log(btns[0].classList.remove('blue'));
// console.log(btns[0].classList.toggle('blue','aaa'));
// //toggle - если этот класс уже есть он будет убран, если нет - добавлен
// console.log(btns[0].classList.length);

// // if(btns[1].classList.contains('red')){
// //     console.log('red');
// // }
// //contains проверяет на наличие клаасса

// btns[0].addEventListener('click', ()=>{
//     // if(!btns[1].classList.contains('red')){
//     //     btns[1].classList.add('red');
//     // }
//     // else
//     // {
//     //     btns[1].classList.remove('red');
//     // }
//     btns[1].classList.toggle('red');
// });

// //устаревший classNames

// // console.log(btns[0].className);


// //делегирование событий

// wrapper.addEventListener('click', (event) =>{
//     if(event.target && event.target.tagName == "BUTTON"){
//         console.log('hello');
//     }
// });
// //обращаемся к родителю и задаем функционал сразу всем кнопкам
// //event.target.matchesSelect(button.red) - проверяет на соответствие(наличие)

// // btns.forEach(btn =>{
// //     btn.addEventListener('click', () => {
// //         console.log('hello');
// //     })
// // });
// //не работает с эл-ьами, которые мы добавили динамически


// const btn = document.createElement('button');
// btn.classList.add('red');
// wrapper.append(btn); 




// this

// function showThis(a,b){
//     console.log(this);
//     function sum(){
//         return a + b;
//     }
//     console.log(sum());
// }
// showThis(4,5);

// const obj = {
//     a:20,
//     b:15,
//     sum: function(){
//         console.log(this);
//     }
// };
// obj.sum();

// function sayName(surname) {
//     console.log(this);
//     console.log(this.name + surname);
// }

// const user = {
//     name: 'John'
// };

// sayName.call(user, 'Smith');//call передает контекст вызова в функциб
// sayName.apply(user, ['smith']); // передает с помощью массива

// function count(num) {
//     return this * num;
// }

// const double = count.bind(2); //создается новая функция, которая будет передаваться
// console.log(double(13));



//1) обычная ф-ция this = window, но если use strict = undefined
//2) контекст у методов объекта - сам объект
//3) this в конструкторах классах - новый экземпляр объекта
//4) ручная привязка this: call, apply, bind


// const obj = {
//     num: 5,
//     sayNumber: function() {
//         const say = () => {
//             console.log(this.num);
//         }
//         say();
//     }
// };
// obj.sayNumber();

// const double = a => a * 2;
// console.log(double(4));



//classes

class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    calcArea() {
        return this.height * this.width;
    }
}

class ColoredRectangleWithText extends Rectangle { // наследование
    constructor (height, width,text, bgColor) {
        super(height,width); //вызывает "супер-конструктор у родителя"
        this.text = text;
        this.bgColor = bgColor;
    }
    showMyProps() {
        console.log(`текст: ${this.bgColor}`);
    }
} 

// const square = new Rectangle(10,10);
// const long = new Rectangle(20,100);
// console.log(long.calcArea());

const div = new ColoredRectangleWithText(25,10, 'hello', 'red');
div.showMyProps();
console.log(div.calcArea());

//rest опертор

function log(a, b, ...rest) {
    console.log(a,b,rest);
}
log('first', 'second', 'third', 'fourth');

function multiplyDouble(a, b =2 ){
    console.log(a * b);
}
multiplyDouble(5);



var str = 'dsfsdf';
str.append('z');
console.log(str);