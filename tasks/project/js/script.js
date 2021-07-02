/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

document.addEventListener('DOMContentLoaded',()=>{
    const movieDB = {
        movies: [
            "Логан", 
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };
    
    const promo = document.querySelectorAll('.promo__adv img'),
        poster = document.querySelector('.promo__bg'),
        genre = poster.querySelector('.promo__genre'),
        movieList = document.querySelector('.promo__interactive-list'),
        form = document.querySelector('.add'),
        input = form.querySelector('.adding__input'),
        check = form.querySelector('input[type = "checkbox"]');
    
        form.addEventListener('submit',(e)=>{
            e.preventDefault();
            
            let film = input.value;
    
            if(film){
                
                if(film.length > 21){
                    film = `${film.substring(0,22)}...`;
                }

                movieDB.movies.push(film);
                sortArr(movieDB.movies);
                createMovieList(movieDB.movies, movieList);
                e.target.reset();
            }
        
            if(check.checked){
                console.log('Добавляем любимый фильм');
            }
           
        });

    const deleteAdv = (arr) => {
        arr.forEach(item =>{
            item.remove();
        });
    };
    

    const makeChanges = ()=> {
        genre.textContent = "Драма";
    
        poster.style.backgroundImage = 'url("img/bg.jpg")';
    };
   

    const sortArr = (arr) => {
        arr.sort();
    }; 

    

    function createMovieList(films, parent){
        parent.innerHTML = "";
        
        films.forEach((film, i)=>{
            parent.innerHTML += `
            <li class="promo__interactive-item">${i+1}. ${film}
            <div class="delete"></div>
            </li>
            `;
        });

        document.querySelectorAll('.delete').forEach((btn, i) =>{
            btn.addEventListener('click', ()=>{
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);
            });
        });
    }
    
    deleteAdv(promo);
    makeChanges(); 
    sortArr(movieDB.movies);
    createMovieList(movieDB.movies, movieList);
    
});



