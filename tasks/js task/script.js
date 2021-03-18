const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?','');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

// for (let i = 0; i < 2; i++){
//     const a = prompt('Один из последних просмотренных фильмов',''),
//           b = prompt('Насколько оцените его','');
    
//     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         console.log('done');
//     }
//     else {
//         console.log('error');
//         i--;
//     }
// }
let j=0;
// while( j < 2) {
//     const a = prompt('Один из последних просмотренных фильмов',''),
//     b = prompt('Насколько оцените его','');
//     j++;
//     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         console.log('done');
//     }
//     else {
//         console.log('error');
//         j--;
//     }
// }
do{
    const a = prompt('Один из последних просмотренных фильмов',''),
    b = prompt('Насколько оцените его','');
    j++;
    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('done');
    }
    else {
        console.log('error');
        j--;
    }
}
while (j < 2);

if (personalMovieDB.count <10) {
    console.log('Просмотренно довольно мало фильмов');
}
else if (personalMovieDB.count >=10 && personalMovieDB.count <30) {
    console.log('Вы классический зритель');
}
else if(personalMovieDB.count >= 30) {
    console.log('Вы киноман');
}
else {
    console.log('произошла ошибка');
}
console.log(personalMovieDB);

