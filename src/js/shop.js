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

/* dropdown */
const dropdownButton = document.querySelector('.dropdown__button');
const dropdownMenu = document.querySelector('.dropdown__menu');

// открытие/закрытие списка
dropdownButton.addEventListener('click', () => {
  dropdownMenu.classList.toggle("dropdown-show"); // adds/removes the class dropdown-show
});

// клик вне пунктов меню
document.addEventListener('click', (event) => {
  if (!event.target.closest('.dropdown__menu') && !event.target.closest('.dropdown__button')) {
    dropdownMenu.classList.remove('dropdown-show');
  }
});

// закрытие меню по клику на пункт
const dropdownMenuItems = document.querySelectorAll('.dropdown__menu-item');
dropdownMenuItems.forEach(item => {
  item.addEventListener('click', () => {
    dropdownMenu.classList.remove('dropdown-show');
  });
});