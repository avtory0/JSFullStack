const inputRub = document.querySelector('#rub'),
    inputUsd = document.querySelector('#usd');

inputRub.addEventListener('input', () => {
    const request = new XMLHttpRequest();

    request.open('GET', 'js/current.json');
    // request.open();//собирает настройки для выполнения запроса
    // method(GET,POST), URL по которому будет выполняться запрос, ASYNC, login, password

    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    request.send(); //отправка запроса

    // request.addEventListener('readystatechange', () =>{
    //     if(request.readyState === 4 && request.status === 200){
    //         console.log(request.response);
    //         const data = JSON.parse(request.response);
    //         inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2);
    //     } else{
    //         inputUsd.value = "что-то пошло не так";
    //     }
    // });
    request.addEventListener('load', () => {
        if (request.status === 200) {

            const data = JSON.parse(request.response);
            inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2);
        } else {
            inputUsd.value = "что-то пошло не так";
        }
    });
    //status - статус(номер ответа)
    //statusText - текстовое описание ответа сервера
    //responce - ОТВЕТ от сервера!!!!!!!!
    //readyState - текущее состояние нашего запроса
});