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