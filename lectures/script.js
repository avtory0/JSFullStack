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

console.log(5%2);

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

function showFirstMessage (text){
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

const str = "teSt";
const arr = [1,2,4];

// console.log(arr.length);
// console.log(str[2]);
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
console.log(str);
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

function first () {
    setTimeout(function(){
        console.log(1);
    }, 500);
}

function second() {
    console.log(2);
}
first();
second();

function learnJS(lang,callback) {
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