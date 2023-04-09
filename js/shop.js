const modal = document.querySelector('#modal'); // получение доступа к модалке
const openModal = document.querySelector('.language'); // доступ к кнопке Login
const closeModal = document.querySelector('.close-button'); // доступ к кнопке Close Modal внутри модалки

openModal.addEventListener("click", () => {
  modal.showModal();
});


closeModal.addEventListener("click", () => {
  modal.close();
});


/* initialize swiper shop page */
const swiper2 = new Swiper('.swiper', {
  slidesPerView: 1,
  spaceBetween: 30,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: ".swiper-pagination",
  },
});

/* handler for hearts active */
const hearts = document.querySelectorAll('.whishlist-heart');

hearts.forEach(heart => {
  heart.addEventListener('click', () => {
    heart.classList.toggle('heart-active');
  })
})


/* dropdown menu */
const dropdownButton = document.querySelector('.dropdown__button');
const dropdownMenu = document.querySelector('.dropdown__menu');

// клик по кнопке
dropdownButton.addEventListener('click', () => {
  dropdownMenu.style.display = dropdownMenu.style.display === 'none' ? 'block' : 'none';
})

// закрытие выпадашки по клику на пункт меню
dropdownMenu.addEventListener('click', (event) => {
  if (event.target.classList.contains('dropdown__menu-item')) {
    dropdownMenu.style.display = 'none';
  }
})

// закрываем меню при клике вне меню
document.addEventListener('click', (event) => {
  if (!event.target.closest('.dropdown')) {
    dropdownMenu.style.display = 'none';
  }
})


// скрываем меню при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
  dropdownMenu.style.display = 'none';
})