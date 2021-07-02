'use strict';

// localStorage.setItem('number', 5);

// console.log(localStorage.getItem('number'));

const check = document.querySelector('#checkbox'),
    change = document.querySelector('#color'),
    form = document.querySelector('form');

check.addEventListener('change', () => {
    localStorage.setItem('isChecked', true);
});

if (localStorage.getItem('isChecked')) {
    check.checked = true;
}

if (localStorage.getItem('bg') === 'changed') {
    form.style.backgroundColor = 'red';
}

change.addEventListener('click', () => {
    if (localStorage.getItem('bg') === 'changed') {
        localStorage.removeItem('bg');
        form.style.backgroundColor = '#fff';
    } else {
        localStorage.setItem('bg', 'changed');
        form.style.backgroundColor = 'red';
    }
});

const person = {
    name: 'Alex',
    age: 21
};

const serializableString = JSON.stringify(person);
localStorage.setItem('Alex', serializableString);

console.log(JSON.parse(localStorage.getItem('Alex')));