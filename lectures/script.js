let number = 1;
const leftBorderWidth = 5;

// number = 10;
// console.log(number);

// const obj = {
//     a: 10
// };

// obj.a = 50;
// console.log(obj);

//object

// const objj = {
//     name: "Harry",
//     age:12,
//     isGay:false
// };

// console.log(objj);

// let arr = ['img', 'orange', 2,5];
// console.log(arr[1]);


// const answers = [];

// answers[0]=prompt('how are u?');
// answers[1]=prompt('how are u?');

//интерполяция

// const category = "toys";

// console.log("http://someurl.com/" + category ); //старый способ

// console.log(`http://someurl.com/${category}` ); //интерполяция

// const user = "Artem";
// alert(`hello, ${user}`);



let incr = 10,
    decr = 10;

// incr++;
// decr--;
console.log(++incr);
console.log(--decr);

console.log(5 % 2);

//условия №13

//обычные условия
// const num = 50;
// if(num <49){
//     console.log('Слишком мало');
// }
// else if(num > 50 ){
//     console.log("Много");
// }
// else {
//     console.log("OK");
// } 

// тернарный оператор
// (num == 50) ? console.log('OK!') : console.log('Error');

// //switch
// switch(num) {
//     case 49:
//         console.log('false');
//         break;
//     case 100:
//         console.log('false again');
//         break;
//     case 51:
//         console.log('its true');
//         break;
//     default:
//         console.log('not today');
//         break;
// }

//Циклы №14

// let num = 50;
// while(num<55){
//     console.log(num);
//     num++;
// }

// do{
//     console.log(num);
//     num++;
// }
// while(num<55);

// for (let i =1; i < 8; i++){
//     if (i ==6){
//         break;
//     }
//     console.log(num);
//     num++;
// }

// Функции №16

function showFirstMessage(text) {
    console.log(text);
}
showFirstMessage('Hello World!');

// function calc(a,b){
//     return(a+b);
// }
// console.log(calc(4,3));

// function ret() {
//     let num = 50;

//     return num;
// }
// const anotherNum = ret();
// console.log(anotherNum);

// const logger = function () {
//     console.log("hello");
// };
// logger();

// const calc = (a,b) => a+b; //стрелочная функция
// const calculation = (a, b) => {
//     console.log('1');
//     return a + b;
// };
//17 методы и свойства у строк и чисел

// const str = "teSt";
// const arr = [1, 2, 4];

// console.log(arr.length);
// console.log(str[2]);
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
// console.log(str);
const fruit = "some fruit";
console.log(fruit.indexOf("fruit"));
// indexof() метод получение номера какого-либо символа (получение номера подстроки)

const logg = "Hello world";
console.log(logg.slice(6, 11));
// метод slice() позволяет вырезать часть строки.
//Принимает два параметра: 1- начальная позиция, 2- конец не включая последний символ
console.log(logg.substring(6, 11));
//метод  substring() похож на slice(), за исключением того, что первый аргумент может принимать значение больше второго
console.log(logg.substr(6, 3));
//метод substr() первый аргумент отвечает за начальную позицию,
// а второй указываеьт на количество символов, которые нужно вырезать

const num = 12.2;
console.log(Math.round(num));

const test = "12.2px";
console.log(parseInt(test));
console.log(parseFloat(test));
//parseInt() переводит в int-овое значение

//# callback-функция

function first() {
    setTimeout(function () {
        console.log(1);
    }, 500);
}

function second() {
    console.log(2);
}
first();
second();

function learnJS(lang, callback) {
    console.log(`Я учу: ${lang}`);
    callback();
}
function done() {
    console.log('Я прошел этот урок');
}
learnJS('JavaScript', done); //передаем функцию done в ф-цию learnJS
// learnJS('JavaScript', function(){
//     console.log('Я прошел этот урок');
// });

//20 объекты

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function () {
        console.log("TEST");
    }
};

options.makeTest();

const { border, bg } = options.colors; // деструктуризация объекта
console.log(border);

// console.log(options.name);
// delete options.name;
// console.log(options);
// let counter = 0;
// for (let key in options) {
//     if(typeof(options[key]) === 'object') {
//         for (let i in options[key]) {
//             console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
//             counter ++;
//         }
//     }
//     else {
//     console.log(`Свойство ${key} имеет значение ${options[key]}`);
//     counter ++;
//     }
// }
// console.log(counter);
console.log(Object.keys(options).length);
//object.keys создает массив и записывает в него все свойства нашего объекта options

//21 массивы и псевдомассивы 

const array = [41, 12, 23, 6, 8];
array.sort(compareNum);
console.log(array);

function compareNum(a, b) {
    return a - b;
}

// array[99] = 0;
// console.log(array.length);

array.forEach(function (item, i, array) {
    console.log(`${i}: ${item} внутри массива ${array}`);
});
// array.pop(); //удаляет последний эл-т
// array.push(10); // добавляет в конец эл-т

// console.log(array);
// for (let i = 0; i < array.length; i++) {
//     console.log(array[i]);
// }

// for (let value of array) {
//     console.log(value);
// }
// const str = prompt("","");
// const products = str.split(", ");
// products.sort();
// console.log(products.join(';'));

//22 Передача по ссылке  или по значению

let a = 5,
    b = a;
b = b + 5;
console.log(b);
console.log(a);

const obj = {
    a:5,
    b:1
};
// const copy = obj; //ссылка на объект obj
// copy.a = 10;
// console.log(copy);
// console.log(obj);

function copy(mainObj){
    let objCopy = {};
    let key;
    for(key in mainObj){
        objCopy[key] = mainObj[key];
    }
    return objCopy;
}

const numbers = {
    a: 2,
    b:5,
    c: {
        x:7,
        y:4
    }
};
const newNumbers = copy(numbers);
newNumbers.a = 10;
newNumbers.c.x = 10;
// console.log(newNumbers);
// console.log(numbers);

const add = {
    d: 13,
    e:21
};
// console.log(Object.assign(numbers, add));
const clone = Object.assign({}, add); // создали клон объекта add
clone.d = 34;
// console.log(add);
// console.log(clone);

const oldArray = ['a','b','c'];
const newArray = oldArray.slice(); // метод копирования массива
newArray[1] = 'check';
console.log(newArray);
console.log(oldArray);

const video = ['youtube','rutube','sometrash'],
      blogs = ['wordpress','livejournal'],
      internet = [...video,...blogs, 'vk','inst']; //spread оператор

console.log(internet);

function log (a,b,c) {
    console.log(a);
    console.log(b);
    console.log(c);
}
const logNum = [1,2,8];
log(...logNum); //spread оператор массива

const arr = ['a','b'];
const newArr = [...arr];

const q = {
    one: 1,
    two: 2
};
const newObjQ = {...q}; //spread оператор объекта
console.log(newObjQ);

//ооп
 let str = "string";
 let strObj = new String(str); // объект
//  console.log(typeof str);
//  console.log(typeof strObj);

console.dir([1,2,3]);

const soldier = { //прототип 
    health: 400,
    armor: 100
};

const John = Object.create(soldier); //объект John будет прототипно насследоваться от soilder
// const John ={
//     health: 100
// };

// John.__proto__ = soldier; // устаревший формат

// Object.setPrototypeOf(John, soldier); //два параметра 1- куда, 2- откуда 

console.log(John.armor);