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



