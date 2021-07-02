
const btn = document.querySelector('.btn');
let timerId,
    i = 0;

function myAnimation(){
    const elem = document.querySelector('.box');
    let pos = 0;

    const id = setInterval(frame, 10);
    function frame() {
        if(pos == 300) {
            clearInterval();
        } else {
            pos++;
            elem.style.top = pos + "px";
            elem.style.left = pos + "px";
        }
    }
}

btn.addEventListener('click', myAnimation);

// btn.addEventListener('click', () =>{
//     // const timeText = setTimeout(logger,2000);
//     timerId = setInterval(logger, 500);
// });

// const timerId = setTimeout(function(text) {
//     console.log(text)
// }, 2000,'hello');


// const timeText = setTimeout(logger,2000);
// function logger () {
//     if(i ==3){
//         clearTimeout(timerId);
//     }
//     console.log('text');
//     i++;
// }

// const id = setTimeout(function log(){
//     console.log('hello');
//     id.setTimeout(log, 500);
// },500);

//date

// const now = new Date();
// const now = new Date(2021, 6, 15, 20);
// const now = new Date(0); // 1 января 1970 - начало отсчета (млскундах)
const now = new Date();
// new Date.parse('2021-06-15');


// console.log(now.getFullYear()); 
// console.log(now.getMonth()); // отсчет месяцов начинается с 0. январь - 0 месяц. 
// console.log(now.getDate());  
// console.log(now.getDay());  // отсчет идет с 0. 0 - воскресенье, 6 - суббота
// console.log(now.getTimezoneOffset());// разница между часовыми поясами
// console.log(now.getTime()); // кол-во милиссек с 1970  

// console.log(now.setHours(18));
// console.log(now);

let start = new Date();

for(let i = 0; i < 100000; i++) {
    let some = i **3; // ** -оператор, которые возводит в стеепень

}
let end = new Date();

alert(`Цикл отработал за ${end - start} миллисекунд`);