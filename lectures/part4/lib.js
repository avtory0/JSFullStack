// const number = 1;

// (function(){
//     let number = 2;
//     console.log(number);
//     console.log(number + 3);
// }());

// console.log(number);

// const user = (function(){
//     const private = function() {
//         console.log('i am privat');
//     };

//     return {
//         saySmth: private
//     };
// }());

// user.saySmth();

// ////----

// function myModyle() {
//     this.hello = function() {
//         console.log('hello');
//     };

//     this.goodbye = function() {
//         console.log('bye bye');
//     };
// }

// module.exports = myModyle; // экспорт ф-ции из одного файла в др.



export let one = 1;
let two = 2;

export {two};

export default function sayHello() {
    console.log('hello');
}
//default - экспорт по умолчанию, может ббыть только один
