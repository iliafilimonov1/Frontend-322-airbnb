const modal = document.querySelector('#modal'); // получение доступа к модалке
const openModal = document.querySelector('.language'); // доступ к кнопке language
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


/* initialize swiper main page */
const swiper = new Swiper('.swiper', {
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
  // autoplay: {
  //   delay: 2000,
  // }
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




