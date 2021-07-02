'use strict';

const box = document.querySelector('.box'),
        btn = document.querySelector('button');

// const width = box.clientWidth; //без отступов
// const height = box.clientHeight;

// const width = box.offsetWidth; //только видимая часть
// const height = box.offsetHeight;

const width = box.scrollWidth; //только видимая часть
const height = box.scrollHeight;

console.log(width, height);

btn.addEventListener('click', () =>{
    // box.style.height = box.scrollHeight + 'px';
    console.log(box.scrollTop);
});

console.log(box.getBoundingClientRect());

