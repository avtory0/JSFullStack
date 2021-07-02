
const p = document.querySelectorAll('p');
console.log(p); 

function loadScript(src) {
    const script = document.createElement('script');
    script.src = src;
    // script.async = false;
    document.body.append(script);
}
loadScript("test.js");


// //mobile events
// window.addEventListener('DOMContentLoaded', () => {

//     const box = document.querySelector('.box');

//     box.addEventListener('touchstart', (e) => { //тап по эл-ту
//         e.preventDefault();
//         console.log('start');
//         console.log(e.touches);
//     });

//     // box.addEventListener('touchmove', (e) => { // водим пальцем по эл-ту
//     //     e.preventDefault();
//     //     console.log('move');
//     // });

//     // box.addEventListener('touchend', (e) => { // отпустили палец от эл-та
//     //     e.preventDefault();
//     //     console.log('end');
//     // });
// });

// // 