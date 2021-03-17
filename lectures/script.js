let number = 1;
const leftBorderWidth = 5;

// number = 10;
// console.log(number);

// const obj = {
//     a: 10
// };

// obj.a = 50;
// console.log(obj);

//object

// const objj = {
//     name: "Harry",
//     age:12,
//     isGay:false
// };

// console.log(objj);

// let arr = ['img', 'orange', 2,5];
// console.log(arr[1]);


// const answers = [];

// answers[0]=prompt('how are u?');
// answers[1]=prompt('how are u?');

//интерполяция

// const category = "toys";

// console.log("http://someurl.com/" + category ); //старый способ

// console.log(`http://someurl.com/${category}` ); //интерполяция

// const user = "Artem";
// alert(`hello, ${user}`);



let incr = 10,
    decr = 10;

// incr++;
// decr--;
console.log(++incr);
console.log(--decr);

console.log(5%2);

//условия №13

//обычные условия
// const num = 50;
// if(num <49){
//     console.log('Слишком мало');
// }
// else if(num > 50 ){
//     console.log("Много");
// }
// else {
//     console.log("OK");
// } 

// тернарный оператор
// (num == 50) ? console.log('OK!') : console.log('Error');

// //switch
// switch(num) {
//     case 49:
//         console.log('false');
//         break;
//     case 100:
//         console.log('false again');
//         break;
//     case 51:
//         console.log('its true');
//         break;
//     default:
//         console.log('not today');
//         break;
// }

//Циклы №14

let num = 50;
// while(num<55){
//     console.log(num);
//     num++;
// }

// do{
//     console.log(num);
//     num++;
// }
// while(num<55);

for (let i =1; i < 8; i++){
    if (i ==6){
        break;
    }
    console.log(num);
    num++;
}
