'use strict';

const box = document.getElementById('box');
// console.log(box);

const btns = document.getElementsByTagName('button'); // формирует псевдомассив
// console.log(btns[1]);

const circle = document.getElementsByClassName('circle'); // формирует псевдомассив
// console.log(circle);

const hearts = document.querySelectorAll('.heart'); // формирует псевдомассив
// hearts.forEach(item => { // метод фор ич для вывода
//     console.log(item);
// });

const oneHeart = document.querySelector('.heart'); // так же как getElByID получет один эл-т
// console.log(oneHeart);
const wrapper = document.querySelector('.wrapper');
//-----------------------------------

// console.dir(box); // формирует объект и показывает все его св-ва
// box.style.backgroundColor = 'blue';
// box.style.width = '501px';
box.style.cssText = 'background-color: blue; width: 500px';

btns[1].style.borderRadius = '100%';
circle[0].style.backgroundColor = 'red'; 

// for(let i = 0; i < hearts.length; i++){
//     hearts[i].style.backgroundColor = 'blue'; 
// }

hearts.forEach(item =>  {
    item.style.backgroundColor = 'blue';
});

const div = document.createElement('div'); //существует только в js
// const text = document.createTextNode('Я да я');

div.classList.add('black');

// wrapper.append(div); // append добавляет node после last-child
wrapper.appendChild(div);
// wrapper.prepend(div);// append  добавляет node перед

wrapper.insertBefore(div, hearts[0]); // засовывет перед элементом(1- что, 2- перед чем)

// hearts[1].before(div); //добавляет перед эл-том
// hearts[1].after(div); // добавляет после эл-та

// circle[0].remove(); // удаляет
// wrapper.removeChild(hearts[1]); //старый метод

// hearts[0].replaceWith(circle[0]);// заменяет что на что
// wrapper.replaceChild(circle[0], hearts[1]); // старый способ

div.innerHTML = "<h1>Hello World</h1>"; // для html структуры
// div.textContent = "Hello"; //для текста

div.insertAdjacentHTML("afterend", '<h2>Hello</h2>');
//beforebegin - позволяет вставить данные перед элементом
//afterbegin - вставляет в начало эл-та
//beforeend - в конец
// afterend - после эл-та