window.addEventListener('DOMContentLoaded', () => {
   //tabs
   const tabs = document.querySelectorAll('.tabheader__item '),
      tabsContent = document.querySelectorAll('.tabcontent'),
      tabsParent = document.querySelector('.tabheader__items ');

   function hideTabContent() {
      tabsContent.forEach(item => {
         item.classList.add('hide');
         item.classList.remove('show', 'fade');
      });

      tabs.forEach(item => {
         item.classList.remove('tabheader__item_active');
      });
   }

   function showTabContent(i = 0) {
      tabsContent[i].classList.add('show', 'fade');
      tabsContent[i].classList.remove('hide');
      tabs[i].classList.add('tabheader__item_active');
   }
   hideTabContent();
   showTabContent();

   tabsParent.addEventListener('click', (event) => {
      const target = event.target;
      console.log("click");
      if (target && target.classList.contains('tabheader__item')) {
         tabs.forEach((item, i) => {
            if (target == item) {
               hideTabContent();
               showTabContent(i);
            }
         });
      }
   });


   //timer

   const deadline = '2021-06-31';

   function getTimeRemaining(endtime) {
      const t = Date.parse(endtime) - Date.parse(new Date()),
         days = Math.floor(t / (1000 * 60 * 60 * 24)),
         hours = Math.floor((t / (1000 * 60 * 60) % 24)),
         minutes = Math.floor((t / 1000 / 60) % 60),
         seconds = Math.floor((t / 1000) % 60);

      return {
         'total': t,
         'days': days,
         'hours': hours,
         'minutes': minutes,
         'seconds': seconds
      };
   }

   function getZero(num) {
      if (num >= 0 && num < 10) {
         return `0${num}`;
      } else {
         return num;
      }
   }

   function setTimer(selector, endtime) {
      const timer = document.querySelector('.timer'),
         days = timer.querySelector('#days'),
         hours = timer.querySelector('#hours'),
         minutes = timer.querySelector('#minutes'),
         seconds = timer.querySelector('#seconds'),
         timeInterval = setInterval(updateClock, 1000);

      updateClock();

      function updateClock() {
         const t = getTimeRemaining(endtime);

         days.innerHTML = getZero(t.days);
         hours.innerHTML = getZero(t.hours);
         minutes.innerHTML = getZero(t.minutes);
         seconds.innerHTML = getZero(t.seconds);

         if (t.total <= 0) {
            clearInterval(setInterval);
         }
      }
   }

   setTimer('.timer', deadline);



   //modal

   const btn = document.querySelectorAll('[data-modal]'),
      modal = document.querySelector('.modal');

   function OpenModal() {
      modal.classList.add('show');
      modal.classList.remove('hide');
      document.body.style.overflow = 'hidden';
      clearInterval(modelTimerId);
   }
   btn.forEach(item => {
      item.addEventListener('click', OpenModal);
   });


   function closeModal() {
      modal.classList.add('hide');
      modal.classList.remove('show');
      document.body.style.overflow = '';
   }


   modal.addEventListener('click', (e) => {
      if (e.target === modal || e.target.getAttribute('data-close') === '') {
         closeModal();
      }
   });

   document.addEventListener('keydown', (e) => {
      if (e.code === "Escape") {
         closeModal();
      }
   });

   const modelTimerId = setTimeout(OpenModal, 50000);

   function showModelByScroll() {
      if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
         OpenModal();
         window.removeEventListener('scroll', showModelByScroll);
      }
   }

   window.addEventListener('scroll', showModelByScroll);



   // Cards

   class MenuCard {
      constructor(src, alt, title, description, price, parentSelector, ...classes) {
         this.src = src;
         this.alt = alt;
         this.title = title;
         this.description = description;
         this.price = price;
         this.classes = classes;
         this.parent = document.querySelector(parentSelector);
         this.transfer = 27;
         this.changeToUAH();
      }

      changeToUAH() {
         this.price = this.price * this.transfer;
      }

      render() {
         const element = document.createElement('div');
         if (this.classes.length === 0) {
            this.element = 'menu__item';
            element.classList.add(this.element);
         } else {
            this.classes.forEach(className => element.classList.add(className));
         }

         element.innerHTML = `
            
            <img src=${this.src} alt=${this.alt}>
            <h3 class="menu__item-subtitle">${this.title}</h3>
               <div class="menu__item-descr">${this.description}</div>
               <div class="menu__item-divider"></div>
               <div class="menu__item-price">
                  <div class="menu__item-cost">Цена:</div>
                  <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
               </div>
            
         `;
         this.parent.append(element);
      }
   }


   const getResource = async (url) => {
      const res = await fetch(url);

      if (!res.ok) {
         throw new Error(`Could not fetch ${url}, status: ${res.status}`);
      }

      return await res.json();
   };

   // getResource('http://localhost:3000/menu')
   //    .then(data => {
   //       data.forEach(({img, altimg,title,descr, price}) => {
   //          new MenuCard(img, altimg,title,descr, price, '.menu .container').render();
   //       });
   //    });

   axios.get('http://localhost:3000/menu')
      .then(data => {
         data.data.forEach(({
            img,
            altimg,
            title,
            descr,
            price
         }) => {
            new MenuCard(img, altimg, title, descr, price, '.menu .container').render();
         });
      });

   //forms

   const form = document.querySelectorAll('form');

   const message = {
      loading: 'img/form/spinner.svg',
      success: 'Success',
      failure: 'Failure'
   };

   form.forEach(item => {
      bindPostData(item);
   });

   const postData = async (url, data) => {
      const res = await fetch(url, {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json'
         },
         body: data
      });
      return await res.json();
   };

   function bindPostData(form) {
      form.addEventListener('submit', (e) => {
         e.preventDefault();

         const statusMessage = document.createElement('img');
         statusMessage.src = message.loading;
         statusMessage.style.cssText = `
            display: block;
            margin: 0 auto;
         `;

         form.insertAdjacentElement('afterend', statusMessage);
         // insertAdjacentElement позволяет более гибко вставить эл-т; 1 прмтр - после какого элта вставлять, 2 - что именно

         // const request = new XMLHttpRequest(); //-- старый способ
         // request.open('POST', 'server.php');

         const formData = new FormData(form);

         const json = JSON.stringify(Object.fromEntries(formData.entries()));
         //entries - превращает в массивов массивов
         //fromEntries - превращает массив массивов в обычный объект


         //Промис, который запускается с помощью fetch не обработает ошибку

         postData('http://localhost:3000/requests', json)
            .then(data => {
               console.log(data);
               showThanksModal(message.success);
               statusMessage.remove();
            }).catch(() => {
               showThanksModal(message.failure);
            }).finally(() => {
               form.reset();
            });

      });
   }


   function showThanksModal(message) {
      const prevModal = document.querySelector('.modal__dialog');

      prevModal.classList.add('hide');
      OpenModal();

      const thanksModal = document.createElement('div');
      thanksModal.classList.add('modal__dialog');
      thanksModal.innerHTML = `
         <div class="modal__content">
            <div class="modal__close" data-close>×</div>
            <div class="modal__title">${message}</div>
         </div>
      `;

      document.querySelector('.modal').append(thanksModal);
      setTimeout(() => {
         thanksModal.remove();
         prevModal.classList.add('show');
         prevModal.classList.remove('hide');
         closeModal();
      }, 4000);
   }


   // fetch('https://jsonplaceholder.typicode.com/posts', {
   //       method: 'POST',
   //       body: JSON.stringify({
   //          name: 'Alex'
   //       }),
   //       headers: {
   //          'Content-Type': 'application/json'
   //       }
   //    })
   //    .then(response => response.json())
   //    .then(json => console.log(json));



   // jsnon-serever

   // fetch('http://localhost:3000/menu')
   //    .then(data => data.json())
   //    .then(res => console.log(res));




   //slider

   const slides = document.querySelectorAll('.offer__slide'),
      prev = document.querySelector('.offer__slider-prev'),
      next = document.querySelector('.offer__slider-next'),
      total = document.querySelector('#total'),
      current = document.querySelector('#current'),
      slidesWrapper = document.querySelector('.offer__slider-wrapper'),
      slidesField = document.querySelector('.offer__slider-inner'),
      width = window.getComputedStyle(slidesField).width,
      slider = document.querySelector('.offer__slider');

   let slideIndex = 1;
   let offset = 0;
   slider.style.position = 'relative';


   if (slides.length < 10) {
      total.textContent = `0${slides.length}`;
      current.textContent = `0${slideIndex}`;
   } else {
      total.textContent = slides.length;
      current.textContent = slideIndex;
   }

   slidesField.style.width = 100 * slides.length + '%';
   slidesField.style.display = 'flex';
   slidesField.style.transition = '.5s all';

   slidesWrapper.style.overflow = 'hidden';

   slides.forEach(slides => {
      slides.style.width = width;
   });

   next.addEventListener('click', () => {
      if (offset == +width.slice(0, width.length - 2) * (slides.length - 1)) {
         offset = 0;
      } else {
         offset += +width.slice(0, width.length - 2);
      }

      slidesField.style.transform = `translateX(-${offset}px)`;

      if (slideIndex == slides.length) {
         slideIndex = 1;
      } else {
         slideIndex++;
      }

      if (slideIndex < 10) {
         current.textContent = `0${slideIndex}`;
      } else {
         current.textContent = slideIndex;
      }
      dotActive();
   });

   prev.addEventListener('click', () => {
      if (offset == 0) {
         offset = +width.slice(0, width.length - 2) * (slides.length - 1);
      } else {
         offset -= width.slice(0, width.length - 2);
      }

      slidesField.style.transform = `translateX(-${offset}px)`;

      if (slideIndex == 1) {
         slideIndex = slides.length;
      } else {
         slideIndex--;
      }

      if (slideIndex < 10) {
         current.textContent = `0${slideIndex}`;
      } else {
         current.textContent = slideIndex;
      }
      dotActive();
   });

   const dotWrapper = document.createElement('ul');
   dotWrapper.classList.add('carousel-indicators');
   slider.append(dotWrapper);


   slides.forEach(dots => {
      dots = document.createElement('li');
      dots.classList.add('dot');
      dotWrapper.append(dots);
   });

   const dots = document.querySelectorAll('.dot');

   function dotActive() {
      dots.forEach(item => {
         item.style.opacity = '0.5';
      });
      dots[slideIndex - 1].style.opacity = 1;
   }

   dotActive();

   dots.forEach(item => {
      item.addEventListener('click', (e) => {
         dots.forEach((item, index) => {
            if (e.target == item) {
               slideIndex = index + 1;
               offset = +width.slice(0, width.length - 2) * (slideIndex - 1);

               slidesField.style.transform = `translateX(-${offset}px)`;
               dotActive();

               if (slideIndex < 10) {
                  current.textContent = `0${slideIndex}`;
               } else {
                  current.textContent = slideIndex;
               }
            }

         });
      });
   });




   //calc
   const result = document.querySelector('.calculating__result span');
   let sex, height, weight, age, ratio;

   if (localStorage.getItem('sex')) {
      sex = localStorage.getItem('sex');
   } else {
      sex = 'female';
      localStorage.setItem('sex', 'female');
   }

   if (localStorage.getItem('ratio')) {
      ratio = localStorage.getItem('ratio');
   } else {
      ratio = 1.375;
      localStorage.setItem('ratio', 1.375);
   }



   function calcTotal() {
      if (!sex || !height || !weight || !age || !ratio) {
         result.textContent = '___';
         return;
      }

      if (sex === 'female') {
         result.textContent = Math.round((447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age) * ratio));
      } else {
         result.textContent = Math.round((88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age) * ratio));
      }
   }
   calcTotal();

   function initLocalSettings(selector, activeClass) {
      const elements = document.querySelectorAll(selector);

      elements.forEach(elem => {
         elem.classList.remove(activeClass);

         if (elem.getAttribute('id') === localStorage.getItem('sex')) {
            elem.classList.add(activeClass);
         }
         if (elem.getAttribute('data-ratio') === localStorage.getItem('ratio')) {
            elem.classList.add(activeClass);
         }
      });
   }

   initLocalSettings('#gender div', 'calculating__choose-item_active');
   initLocalSettings('.calculating__choose_big div', 'calculating__choose-item_active');


   function getStaticInfo(selector, activeClass) {
      const elements = document.querySelectorAll(selector);

      elements.forEach(elem => {
         elem.addEventListener('click', (e) => {
            if (e.target.getAttribute('data-ratio')) {
               ratio = +e.target.getAttribute('data-ratio');
               localStorage.setItem('ratio', +e.target.getAttribute('data-ratio'));
            } else {
               sex = e.target.getAttribute('id');
               localStorage.setItem('sex', e.target.getAttribute('id'));
            }



            elements.forEach(elem => {
               elem.classList.remove(activeClass);
            });

            e.target.classList.add(activeClass);

            calcTotal();
         });
      });
   }

   getStaticInfo('#gender div', 'calculating__choose-item_active');
   getStaticInfo('.calculating__choose_big div', 'calculating__choose-item_active');


   function getDynamicInfo(selector) {
      const input = document.querySelector(selector);

      input.addEventListener('input', () => {

         if (input.value.match(/\D/g)) {
            input.style.border = '1px solid red';
         } else {
            input.style.border = 'none';
         }

         switch (input.getAttribute('id')) {
            case 'height':
               height = +input.value;
               break;
            case 'weight':
               weight = +input.value;
               break;
            case 'age':
               age = +input.value;
               break;
         }
         calcTotal();
      });
   }

   getDynamicInfo('#height');
   getDynamicInfo('#weight');
   getDynamicInfo('#age');

});