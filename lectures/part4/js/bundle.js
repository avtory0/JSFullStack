/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./lib.js":
/*!****************!*\
  !*** ./lib.js ***!
  \****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "one": () => (/* binding */ one),
/* harmony export */   "two": () => (/* binding */ two),
/* harmony export */   "default": () => (/* binding */ sayHello)
/* harmony export */ });
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



let one = 1;
let two = 2;



function sayHello() {
    console.log('hello');
}
//default - экспорт по умолчанию, может ббыть только один


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*******************!*\
  !*** ./script.js ***!
  \*******************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib.js */ "./lib.js");
// // const person = {
// //     name: 'John',
// //     tel: '+375292250045'
// // };

// // console.log(JSON.stringify(person)); //в JSON
// // console.log(JSON.parse(JSON.stringify(person))); //из json-а

// console.log('запрос данных..');

// const req = new Promise((resolve, reject) => {
//     // обедщаение; 
//     //resolve - ф-ция обрабатывающая положиьтельный исход (then)
//     // reject - обрабатывает в случае ошибки (catch)

//     setTimeout(() => {
//         console.log('подготовка данных...');

//         const product = {
//             name: 'TV',
//             price: 2000
//         };

//         // resolve(product); // вызов resolve, парамтр передает данные для связи (product)
//         reject(product); //обработка ошибки (catch)
//     }, 2000);
// });

// // req.then((product) => { //иницилизация ф-ции
// //     setTimeout(() => {
// //         product.status = 'order';
// //         console.log(product);
// //     }, 2000);
// // });

// req.then((product) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             product.status = 'order';
//             resolve(product);
//         }, 2000);
//     });
// }).then((product) => {
//     product.modify = true;
//     return product;
// }).then(product => {
//     console.log(product);
// }).catch(() => {
//     console.error('произошла ошибка');
// }).finally(() => {
//     console.log('finally');
// });




// const test = time => {
//     return new Promise((resolve) => {
//         setTimeout(() => resolve(), time);
//     });
// };

// // test(1000).then(() => console.log('1000 ms'));
// // test(2000).then(() => console.log('2000 ms'));

// Promise.all([test(1000), test(2000)]).then(() => {
//     console.log('all');
// });
// //Promise.all ожидает завершения всех переданных промисов в массив и потом уже что-то выполняет

// Promise.race([test(1000), test(2000)]).then(() => {
//     console.log('all');
// });
// //Promise.race - выполняет свои действия после завершения самого первого промиса


// //-----------------------------------------------
// //методы перебора массива

// // -- filter

// const names = ['Ivan', 'Anna', 'Ksenia', 'Voldemart'];

// const shortNames = names.filter(name => {
//     return name.length < 5;
// });

// console.log(shortNames);


// //--map позволяет трансформировать каждый эл-т массива отдельно
// let answers = ['IvAn', 'AnnA', 'Hello'];

// answers = answers.map( item => item.toLowerCase());
// console.log(answers);

// // -- every/some (boolen)
// //some - перебирает массив и если хотя бы 1 эл-т удовлетворяет условию - true, иначе false
// //every - если все эл-ты соотв условию true, иначе false
// const some = [4, 'sdf', 'qwreq'];

// // console.log(some.some(item => typeof(item) === 'number'));
// console.log(some.every(item => typeof(item) === 'number'));


// // -- reduce - позволяет собирать массивы в один 
// // 1 параментр - ф-ция
// //2 - начальное значение

// const arr = [2,5,3,6,12];
// // sum - сумма, current - текущее число
// // после сложения sum и current sum получает значение равное предущей сумме 
// const res = arr.reduce((sum, current) => sum + current);
// console.log(res);

// const fruit = ['apple', 'pear', 'plum'];
// const fruitRes = fruit.reduce((item, current) => `${item}, ${current}`);
// console.log(fruitRes);

// // 

// const obj = {
//     ivan: 'person',
//     ann: 'person',
//     dog: 'animal',
//     cat: 'animal'
// };

// const newResult = Object.entries(obj) // формирует массив из объекта
// .filter(item => item[1] === 'person')
// .map(item => item[0]);
// //chain
// console.log(newResult);




//regexp

// new RegExp('pattern', 'flags');
// /patern/flags

//Methods:
//search - поиск первого соотв. Возвращает позицию символа, иначе -1
//match - получаем массив(индекс, строка, группы) работает с флагом g
//replace - позволяет заменить строку
//test - проверяет на соответствие патерна (boolean)

//flags
//i - не зависит от регистра
//g - ищем сразу несколько вхождения (не работает с методом search())
//m - многострочное вхождение

//classes
// \d - ищем цифры
// \w - все буквы
// \s - ищем все пробелы
// \D - не числа
// \W - не бувквы 
// \S - не пробел


// const ans = prompt('Введите ваше число');
const exmpl = 'My name is R2D2';
// const pass = prompt('password, please');

// const reg = /n/ig; // regex
const reg = /\d/;

console.log(exmpl.match(/\D/ig));


// console.log(ans.search(reg));
// console.log(ans.match(reg));
// console.log(pass.replace(/./g, '*')); // (/\./) будет реагироваить только на точки '\'
// console.log('12-32-43'.replace(/-/g, ':'));



class User {
    constructor(name, age) {
        this.name = name;
        this._age = age;
    }

    // #surname = 'balancevich';

    // get surname() {
    //     return this.#surname;
    // }

    // set surname(snm) {
    //     this.#surname = snm;
    // }

    say() {
        console.log(`Имя пользователя: ${this.name} возраст ${this._age}`);
    }

    get age() {
        return this._age;
    }

    set age(age) {
        if (typeof age === 'number' && age > 0 && age < 110) {
            this._age = age;
        } else {
            console.log('недопустимое значение');
        }
    }

}

const ivan = new User('ivan', 12);
console.log(ivan.age);
ivan.age = 99;
console.log(ivan.age);

ivan.say();



//---

// const myModule = require('.lib');

// const myModuleInstance = new myModule(); // экземпляр объекта
// myModuleInstance.hello();
// myModuleInstance.goodbye();


// import {one as first} from './lib';
// import {one, two} from './lib';



console.log(`${_lib_js__WEBPACK_IMPORTED_MODULE_0__.one} and ${_lib_js__WEBPACK_IMPORTED_MODULE_0__.two}`);
// console.log(first);
(0,_lib_js__WEBPACK_IMPORTED_MODULE_0__.default)();
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map