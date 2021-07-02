const btn = document.querySelectorAll('button'),
        overlay = document.querySelector('.overlay');

// btn.onclick = function() {
//     alert('click');
// }; // старый метод

// btn.addEventListener('click', ()=>{
//     alert('click');
// });

// btn.addEventListener('click', ()=>{
//     alert('Second click');
// });
//события в js выполняются в ходе очереди
let i = 0;
const deleteElement = (e)=>{
    console.log(e.target);
    // console.log(e.currentTarget); 
    console.log(e.type);

    // i++;
    // if(i==1){
    //     btn.removeEventListener('click',deleteElement);
    // }
    // console.log(e.target); //target - это тот элемент на который указывается событие
    // e.target.remove();
};

// btn.addEventListener('click',deleteElement);
// overlay.addEventListener('click',deleteElement);
//сначала событие срабатывает на вложенном эл-те, а потом по иерархии поднимается

btn.forEach(btn =>{
    btn.addEventListener('click',deleteElement, {once: true}); //опция once дает возможность использовать событие 1 раз
});

const link = document.querySelector('a');
link.addEventListener('click',(e)=>{
    e.preventDefault();//отмена стандартного  поведения браузера
});

//---------------------------------

// console.log(document.head);
// console.log(document.documentElement);
// console.log(document.body.childNodes); //псевдомассив элементов body
// console.log(document.body.firstChild);
// console.log(document.body.lastChild);

console.log(document.querySelector('#current').parentNode.parentElement);//получаем родителя эл-та с id current

console.log(document.querySelector('[data-current ="3"]').nextElementSibling);//след эл-т 
//получаем предыдущий узел соседа в данном случае #text

for(let node of document.body.childNodes){
    if(node.nodeName == '#text'){
        continue;
    }
    console.log(node);
}

