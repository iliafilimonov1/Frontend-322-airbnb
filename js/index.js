
const modal = document.querySelector('#modal'); // получение доступа к модалке
const openModal = document.querySelector('.language'); // доступ к кнопке Login
const closeModal = document.querySelector('.close-button'); // доступ к кнопке Close Modal внутри модалки

openModal.addEventListener("click", () => {
  modal.showModal();
});


closeModal.addEventListener("click", () => {
  modal.close();
});


/* handler for hearts active */
const hearts = document.querySelectorAll('.whishlist-heart');

hearts.forEach(heart => {
  heart.addEventListener('click', () => {
    heart.classList.toggle('heart-active');
  })
})

/* handler for header active */
const links = document.querySelectorAll('.nav-link');

links.forEach(link => {
  link.addEventListener('click', event => {
    document.querySelector('.nav-link.active').classList.remove('active');
    event.currentTarget.classList.add('active');
  })
})


/* slider */
const swiper = new Swiper(".mySwiper", {
  slidesPerView: 5,
  spaceBetween: 30,
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  autoplay: {
    delay: 2000,
  },
});


/* tabs */
document.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelector('.tabs');
  const tabsBtn = document.querySelectorAll('.tabs__btn');
  const tabsContent = document.querySelectorAll('.tabs__content');

  if (tabs) {
    tabs.addEventListener('click', e => {
      if (e.target.classList.contains('tabs__btn')) {
        const tabsPath = e.target.dataset.tabsPath;
        tabsBtn.forEach(el => el.classList.remove('tabs__btn--active'));
        document.querySelector(`[data-tabs-path="${tabsPath}"]`).classList.add('tabs__btn--active');
        tabsHandler(tabsPath);
      }
    })
  }

  const tabsHandler = path => {
    tabsContent.forEach(el => el.classList.remove('tabs__content--active'));
    document.querySelector(`[data-tabs-target="${path}"]`).classList.add('tabs__content--active');
  }
})








































// const lightStyles = document.querySelectorAll('link[rel=stylesheet][media*=prefers-color-scheme][media*=light]'); // подключение цветовой схемы (media, которая содержит prefer color scheme и содержит light)
// const darkStyles = document.querySelectorAll('link[rel=stylesheet][media*=prefers-color-scheme][media*=dark]');
// const darkSchemeMedia = matchMedia('(prefers-color-scheme: dark)'); // проверка на темную тему
// const switcherRadios = document.querySelectorAll('.switcher__radio'); // получение всех переключателей

// function setupSwitcher() {
//   const savedScheme = getSavedScheme(); // есть ли сохраненная схема

//   // если есть, т.е. не равна null, то находим радио со значением из LocalStorage
//   if (savedScheme !== null) {
//     const currentRadio = document.querySelector(`.switcher__radio[value=${savedScheme}]`);
//     currentRadio.checked = true;
//   }

//   // бежим по радиокнопкам 
//   [...switcherRadios].forEach((radio) => {
//     radio.addEventListener('change', (event) => {
//       setScheme(event.target.value); // получаем каждый элемент (радио) и передаем в setScheme()
//     });
//   });
// }

// function setupScheme() {
//   const savedScheme = getSavedScheme(); // берет из LocalStorage тему, если была выставлена
//   const systemScheme = getSystemScheme(); // проверяет, на наличие системной темы

//   if (savedScheme === null) return; // есть ли сохраненная схема?

//   // если есть, сравниваем, сохраненную с системной. если они не равны, выигрывает сохраненная
//   if (savedScheme !== systemScheme) {
//     setScheme(savedScheme);
//   }
// }

// function setScheme(scheme) {
//   switchMedia(scheme); // переключает медиа стили

//   if (scheme === 'auto') {
//     clearScheme(); // если тема выставлена, как auto, очищаем localStorage
//   } else {
//     saveScheme(scheme);
//   }
// }

// // функция переключает медиа на нужное, в зависимости от того, что мы в нее передаем
// function switchMedia(scheme) {
//   let lightMedia;
//   let darkMedia;

//   if (scheme === 'auto') {
//     lightMedia = '(prefers-color-scheme: light)'; // ставим то, что по умолчанию (светлая)
//     darkMedia = '(prefers-color-scheme: dark)'; // ставим то, что по умолчанию (темная)
//   } else {
//     lightMedia = (scheme === 'light') ? 'all' : 'not all';
//     darkMedia = (scheme === 'dark') ? 'all' : 'not all';
//   }

//   [...lightStyles].forEach((link) => {
//     link.media = lightMedia;
//   });

//   [...darkStyles].forEach((link) => {
//     link.media = darkMedia;
//   });
// }

// function getSystemScheme() {
//   const darkScheme = darkSchemeMedia.matches;

//   return darkScheme ? 'dark' : 'light';
// }

// function getSavedScheme() {
//   return localStorage.getItem('color-scheme');
// }

// function saveScheme(scheme) {
//   localStorage.setItem('color-scheme', scheme);
// }

// function clearScheme() {
//   localStorage.removeItem('color-scheme');
// }

// setupSwitcher();
// setupScheme();


// итог: если тема уже светлая и сохраненная светлая, то ничего не делаем. 
// если сохраненная темная, а текущая светлая, то сохраненная важнее.
// приоритет пользователя выигрывает
// очень подробно здесь https://www.youtube.com/watch?v=8LFbS78a4Rw